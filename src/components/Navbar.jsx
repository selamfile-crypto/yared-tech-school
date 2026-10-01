function Navbar({ t, onLanguageChange }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#102A43]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE89A] font-bold text-[#102A43] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            YT
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight">
              Yared
              <span className="text-[#FFE89A]">Tech</span>
            </h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Technology School
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          <a
            href="#home"
            className="relative py-2 text-sm font-medium text-slate-300 transition hover:text-[#FFE89A]"
          >
            {t.nav.home}
          </a>

          <a
            href="#courses"
            className="relative py-2 text-sm font-medium text-slate-300 transition hover:text-[#FFE89A]"
          >
            {t.nav.courses}
          </a>

          <a
            href="#about"
            className="relative py-2 text-sm font-medium text-slate-300 transition hover:text-[#FFE89A]"
          >
            {t.nav.about}
          </a>

          <a
            href="#contact"
            className="relative py-2 text-sm font-medium text-slate-300 transition hover:text-[#FFE89A]"
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={onLanguageChange}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:border-[#FFE89A]/60 hover:bg-[#FFE89A]/10 hover:text-[#FFE89A]"
            aria-label="Change language"
          >
            {t.switchLanguage}
          </button>

          {/* Enroll */}
          <a
            href="#enroll"
            className="rounded-xl bg-[#FFE89A] px-5 py-2.5 text-sm font-bold text-[#102A43] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-lg hover:shadow-yellow-200/20 focus:outline-none focus:ring-2 focus:ring-[#FFE89A]"
          >
            {t.nav.enroll}
          </a>

        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Language Switcher */}
          <button
            type="button"
            onClick={onLanguageChange}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-[#FFE89A] transition hover:border-[#FFE89A]/60"
            aria-label="Change language"
          >
            {t.switchLanguage}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-lg border border-white/15 px-3 py-2 text-xl transition hover:border-[#FFE89A] hover:text-[#FFE89A] focus:outline-none focus:ring-2 focus:ring-[#FFE89A]"
          >
            ☰
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;