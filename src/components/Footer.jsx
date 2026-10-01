function Footer({ t }) {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#163F5C] to-[#1F5875] px-6 pt-16 text-white">
      {/* Background glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#5BB5D2]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#FFE89A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFE89A] font-bold text-[#102A43] shadow-lg">
                YT
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Yared
                  <span className="text-[#FFE89A]">Tech</span>
                </h2>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Technology School
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-300">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[#FFE89A]/50 hover:bg-[#FFE89A] hover:text-[#102A43]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.04V20h3.38l.33-6.59Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[#FFE89A]/50 hover:bg-[#FFE89A] hover:text-[#102A43]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-[#FFE89A]/50 hover:bg-[#FFE89A] hover:text-[#102A43]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                  <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.6 2.4l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.6 0 .5-.2 1.1-.6 1.4-.4.3-1 .4-1.6.2-3.1-1-5.6-3.5-6.6-6.6-.2-.6-.1-1.2.2-1.6.3-.4.7-.7 1-.9Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFE89A]">
              {t.footer.links}
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="#home"
                className="block text-slate-300 transition hover:translate-x-1 hover:text-[#FFE89A]"
              >
                {t.nav.home}
              </a>

              <a
                href="#courses"
                className="block text-slate-300 transition hover:translate-x-1 hover:text-[#FFE89A]"
              >
                {t.nav.courses}
              </a>

              <a
                href="#about"
                className="block text-slate-300 transition hover:translate-x-1 hover:text-[#FFE89A]"
              >
                {t.nav.about}
              </a>

              <a
                href="#contact"
                className="block text-slate-300 transition hover:translate-x-1 hover:text-[#FFE89A]"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFE89A]">
              {t.footer.connect}
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              {t.footer.connectText}
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center rounded-xl border border-[#FFE89A]/30 bg-[#FFE89A]/10 px-5 py-3 text-sm font-bold text-[#FFE89A] transition duration-300 hover:-translate-y-1 hover:bg-[#FFE89A] hover:text-[#102A43]"
            >
              {t.nav.contact}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Yared Technology School. {t.footer.rights}
          </p>

          <p className="text-slate-500">
            Learn • Build • Grow
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;