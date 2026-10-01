function CTA({ t }) {
  return (
    <section
      id="enroll"
      className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#163F5C] to-[#1F5875] px-6 py-20 text-white md:py-24"
    >
      {/* Background glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#5BB5D2]/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#FFE89A]/10 blur-3xl" />

      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />

      <div className="relative mx-auto max-w-5xl">
        {/* CTA Card */}
        <div className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 md:py-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#FFE89A]/10" />

          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border border-[#5BB5D2]/10" />

          <div className="relative">

            {/* Label */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFE89A]">
              {t.cta.label}
            </p>

            {/* Title */}
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {t.cta.title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t.cta.description}
            </p>

            {/* Button */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center rounded-xl bg-[#FFE89A] px-8 py-4 font-bold text-[#102A43] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-xl hover:shadow-yellow-200/20"
            >
              {t.cta.button}

              <span className="ml-2 transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;