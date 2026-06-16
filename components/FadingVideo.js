const FadingVideo = ({ src, className, style }) => {
  const videoRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const fadingOutRef = React.useRef(false);
  const timeoutRef = React.useRef(null);

  const fadeTo = (targetOpacity, durationMs) => {
    const video = videoRef.current;
    if (!video) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // Read current opacity from inline style (or default to 0)
    const currentOpacityVal = parseFloat(video.style.opacity);
    const startOpacity = isNaN(currentOpacityVal) ? 0 : currentOpacityVal;
    const opacityDiff = targetOpacity - startOpacity;
    
    if (opacityDiff === 0) return;

    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const newOpacity = startOpacity + opacityDiff * progress;
      video.style.opacity = newOpacity.toString();

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset video state on src change
    video.style.opacity = '0';
    fadingOutRef.current = false;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch((err) => {
        console.warn("Autoplay block or play error:", err);
      });
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (!isNaN(duration) && duration > 0) {
        const timeLeft = duration - currentTime;
        if (!fadingOutRef.current && timeLeft <= 0.55 && timeLeft > 0) {
          fadingOutRef.current = true;
          fadeTo(0, 500);
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        video.currentTime = 0;
        video.play().catch((err) => {
          console.warn("Autoplay block or play error on end loop:", err);
        });
        fadingOutRef.current = false;
        fadeTo(1, 500);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // If video is already loaded
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, transition: 'none' }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
};

window.FadingVideo = FadingVideo;
