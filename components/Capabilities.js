const AISceneryIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z" />
  </svg>
);

const BatchProductionIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z" />
  </svg>
);

const SmartLightingIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z" />
  </svg>
);

const Capabilities = () => {
  const motion = window.Motion?.motion || window.Motion;
  const FadingVideo = window.FadingVideo;

  const cardData = [
    {
      title: "AI Scenery",
      body: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
      icon: <AISceneryIcon />,
      tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"]
    },
    {
      title: "Batch Production",
      body: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
      icon: <BatchProductionIcon />,
      tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"]
    },
    {
      title: "Smart Lighting",
      body: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
      icon: <SmartLightingIcon />,
      tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="voyages" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      {FadingVideo && (
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ width: "100%", height: "100%" }}
        />
      )}

      {/* Capabilities Content Overlay */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen justify-between">
        {/* Header Block */}
        {motion ? (
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-auto"
          >
            <div className="text-sm font-body text-white/80 mb-6 uppercase tracking-widest font-semibold">
              // Capabilities
            </div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Production
              <br />
              evolved
            </h2>
          </motion.div>
        ) : (
          <div className="mb-auto">
            <div className="text-sm font-body text-white/80 mb-6 uppercase tracking-widest font-semibold">
              // Capabilities
            </div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Production
              <br />
              evolved
            </h2>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cardData.map((card, i) => {
            const CardContent = () => (
              <>
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Nested 44x44 liquid glass square */}
                  <div className="w-11 h-11 flex items-center justify-center liquid-glass rounded-[0.75rem] flex-shrink-0">
                    {card.icon}
                  </div>

                  {/* Right Tags */}
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                    {card.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Spacer */}
                <div className="flex-1" />

                {/* Card Bottom */}
                <div className="mt-6">
                  <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                    {card.body}
                  </p>
                </div>
              </>
            );

            if (motion) {
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent />
                </motion.div>
              );
            }

            return (
              <div
                key={i}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Capabilities = Capabilities;
window.AISceneryIcon = AISceneryIcon;
window.BatchProductionIcon = BatchProductionIcon;
window.SmartLightingIcon = SmartLightingIcon;
