const PlayIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="6,4 20,12 6,20" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-[28px] h-[28px] text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-[28px] h-[28px] text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const Hero = () => {
  const motion = window.Motion?.motion || window.Motion;
  const FadingVideo = window.FadingVideo;
  const BlurText = window.BlurText;
  const Navbar = window.Navbar;
  const ArrowUpRight = window.ArrowUpRight;

  const animationProps = (delay) => ({
    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" }
  });

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video (z-0) */}
      {FadingVideo && (
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        />
      )}

      {/* Navbar (z-50) */}
      {Navbar && <Navbar />}

      {/* Centered Hero Content (z-10) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-24 pb-4">
        {/* Badge */}
        {motion ? (
          <motion.div
            {...animationProps(0.4)}
            className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2 max-w-full"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
              New
            </span>
            <span className="text-sm text-white/90 pr-3 font-body font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>
        ) : (
          <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2 max-w-full">
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
              New
            </span>
            <span className="text-sm text-white/90 pr-3 font-body font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </div>
        )}

        {/* Headline */}
        <div className="mt-2 md:mt-4">
          {BlurText ? (
            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]"
            />
          ) : (
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px]">
              Venture Past Our Sky Across the Universe
            </h1>
          )}
        </div>

        {/* Subheading */}
        {motion ? (
          <motion.p
            {...animationProps(0.8)}
            className="mt-2 md:mt-3 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-tight"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>
        ) : (
          <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-tight">
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </p>
        )}

        {/* CTA Row */}
        {motion ? (
          <motion.div
            {...animationProps(1.1)}
            className="flex items-center gap-6 mt-4 md:mt-5"
          >
            <button className="liquid-glass-strong hover:scale-105 rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 transition-all duration-300">
              Start Your Voyage
              {ArrowUpRight && <ArrowUpRight className="h-5 w-5" />}
            </button>
            <a
              href="#liftoff"
              className="group flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white font-body transition-colors duration-200"
            >
              View Liftoff
              <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                <PlayIcon className="h-3 w-3 fill-current text-white" />
              </span>
            </a>
          </motion.div>
        ) : (
          <div className="flex items-center gap-6 mt-4 md:mt-5">
            <button className="liquid-glass-strong hover:scale-105 rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 transition-all duration-300">
              Start Your Voyage
              {ArrowUpRight && <ArrowUpRight className="h-5 w-5" />}
            </button>
            <a
              href="#liftoff"
              className="group flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white font-body transition-colors duration-200"
            >
              View Liftoff
              <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                <PlayIcon className="h-3 w-3 fill-current text-white" />
              </span>
            </a>
          </div>
        )}

        {/* Stats Row */}
        {motion ? (
          <motion.div
            {...animationProps(1.3)}
            className="flex flex-col sm:flex-row items-stretch gap-4 mt-5 md:mt-6"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-4 md:p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
              <div className="mb-4 md:mb-6">
                <ClockIcon />
              </div>
              <div>
                <span className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  34.5 Min
                </span>
                <p className="text-xs text-white/70 font-body font-light mt-1 md:mt-2">
                  Average Videos Watch Time
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-4 md:p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
              <div className="mb-4 md:mb-6">
                <GlobeIcon />
              </div>
              <div>
                <span className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  2.8B+
                </span>
                <p className="text-xs text-white/70 font-body font-light mt-1 md:mt-2">
                  Users Across the Globe
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-5 md:mt-6">
            {/* Card 1 */}
            <div className="liquid-glass p-4 md:p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
              <div className="mb-4 md:mb-6">
                <ClockIcon />
              </div>
              <div>
                <span className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  34.5 Min
                </span>
                <p className="text-xs text-white/70 font-body font-light mt-1 md:mt-2">
                  Average Videos Watch Time
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-4 md:p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left">
              <div className="mb-4 md:mb-6">
                <GlobeIcon />
              </div>
              <div>
                <span className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  2.8B+
                </span>
                <p className="text-xs text-white/70 font-body font-light mt-1 md:mt-2">
                  Users Across the Globe
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Partners Row (bottom) */}
      {motion ? (
        <motion.div
          {...animationProps(1.4)}
          className="relative z-10 flex flex-col items-center gap-2 md:gap-4 pb-6 md:pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/95 font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-2 mt-1 px-4">
            {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((name) => (
              <span
                key={name}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight opacity-90"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="relative z-10 flex flex-col items-center gap-2 md:gap-4 pb-6 md:pb-8">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/95 font-body">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-2 mt-1 px-4">
            {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((name) => (
              <span
                key={name}
                className="font-heading italic text-white text-2xl md:text-3xl tracking-tight opacity-90"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

window.Hero = Hero;
window.PlayIcon = PlayIcon;
