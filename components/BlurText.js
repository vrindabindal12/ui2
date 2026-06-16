const BlurText = ({ text, className }) => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef(null);
  const motion = window.Motion?.motion || window.Motion;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.10) {
          setIsInView(true);
          // Only trigger once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.10 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = text.split(" ");

  if (!motion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <p
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em'
      }}
    >
      {words.map((word, i) => {
        const delay = (i * 100) / 1000; // Delay in seconds (stagger: 100ms)
        return (
          <motion.span
            key={i}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={isInView ? {
              filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
              opacity: [0, 0.5, 1],
              y: [50, -5, 0]
            } : {}}
            transition={{
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeOut",
              delay: delay
            }}
            style={{
              display: 'inline-block',
              marginRight: '0.28em'
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

window.BlurText = BlurText;
