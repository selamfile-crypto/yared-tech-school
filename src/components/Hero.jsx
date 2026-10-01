function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-[#102A43] px-6 py-14 text-white md:py-20"
    >
      {/* Background glow */}
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#5BB5D2]/10 blur-3xl" />
      <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#FFE89A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="fade-up">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#FFE89A]/30 bg-[#FFE89A]/10 px-4 py-2 backdrop-blur-sm">
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#FFE89A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFE89A] sm:text-sm">
              {t.hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.title1}

            <span className="mt-2 block text-[#FFE89A]">
              {t.hero.title2}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">

            <a
              href="#courses"
              className="group rounded-xl bg-[#FFE89A] px-7 py-4 text-center font-bold text-[#102A43] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-xl hover:shadow-yellow-200/20"
            >
              {t.hero.explore}

              <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFE89A]/60 hover:text-[#FFE89A]"
            >
              {t.hero.contact}
            </a>

          </div>

          {/* Statistics */}
          <div className="mt-8 flex flex-wrap gap-7 border-t border-white/10 pt-5">

            <div>
              <p className="text-2xl font-bold text-[#FFE89A]">
                500+
              </p>
              <p className="text-sm text-slate-400">
                {t.hero.students}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#FFE89A]">
                12+
              </p>
              <p className="text-sm text-slate-400">
                {t.hero.courses}
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#FFE89A]">
                95%
              </p>
              <p className="text-sm text-slate-400">
                {t.hero.satisfaction}
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — TECHNOLOGY IMAGE */}
        <div className="relative flex min-h-[420px] items-center justify-center fade-up-delay-2">

          {/* Glow behind image */}
          <div className="absolute h-72 w-72 rounded-full bg-[#5BB5D2]/20 blur-3xl" />

          {/* Floating badge */}
          <div className="float-slow absolute left-0 top-4 z-20 rounded-2xl border border-white/15 bg-[#102A43]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-2">

            <p className="text-xs uppercase tracking-wider text-slate-400">
              {t.hero.learn}
            </p>

            <p className="mt-1 font-bold text-[#FFE89A]">
              {t.hero.technology}
            </p>

          </div>

          {/* Floating badge */}
          <div className="float-medium absolute bottom-4 right-0 z-20 rounded-2xl border border-white/15 bg-[#102A43]/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-2">

            <p className="text-xs uppercase tracking-wider text-slate-400">
              {t.hero.build}
            </p>

            <p className="mt-1 font-bold text-[#FFE89A]">
              {t.hero.projects}
            </p>

          </div>

          {/* Image Frame */}
          <div className="relative z-10 w-full max-w-xl">

            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md transition duration-700 hover:-translate-y-3 hover:border-[#FFE89A]/40 hover:shadow-[#FFE89A]/10">

              <div className="relative overflow-hidden rounded-[1.7rem]">

                <img
                  src="/images/technology-background.png"
                  alt="Technology workspace with laptop and programming code"
                  className="h-[390px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[410px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-[#102A43]/10" />

                {/* Image information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFE89A]">
                    {t.hero.imageSubtitle}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    {t.hero.imageTitle}
                  </h2>

                </div>

              </div>
            </div>

            {/* Decorative circles */}
            <div className="azure-orb azure-orb-1" />
            <div className="azure-orb azure-orb-2" />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;