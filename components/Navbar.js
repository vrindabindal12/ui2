const ArrowUpRight = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7 M7 7h10v10" />
  </svg>
);

const Navbar = () => {
  const motion = window.Motion?.motion || window.Motion;

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Voyages", href: "#voyages" },
    { name: "Worlds", href: "#worlds" },
    { name: "Innovation", href: "#innovation" },
    { name: "Plan Launch", href: "#launch" }
  ];

  const NavbarContent = () => (
    <div className="w-full flex items-center justify-between">
      {/* Left logo: 48x48 liquid-glass circle */}
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center liquid-glass rounded-full hover:scale-105 transition-transform duration-300"
      >
        <span className="font-heading italic text-2xl text-white leading-none mt-1">a</span>
      </a>

      {/* Center pill (desktop only) */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-2">
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white font-body transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Claim a Spot CTA button */}
        <button className="bg-white hover:bg-white/90 text-black text-sm font-medium font-body px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-200 shadow-sm whitespace-nowrap">
          Claim a Spot
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Right spacer to balance logo */}
      <div className="w-12 h-12 invisible" aria-hidden="true" />
    </div>
  );

  if (!motion) {
    return (
      <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50">
        <NavbarContent />
      </nav>
    );
  }

  // Animate the entire navbar entrance
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50"
    >
      <NavbarContent />
    </motion.nav>
  );
};

window.Navbar = Navbar;
window.ArrowUpRight = ArrowUpRight;
