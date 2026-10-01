function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#163F5C] to-[#1F5875] px-6 py-24 text-white md:py-28">

      {/* Background glow */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5BB5D2]/10 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#FFE89A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center fade-up">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFE89A]">
            Student Experience
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Learn From People
            <span className="block text-[#FFE89A]">
              Who Have Been There.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Discover how practical learning and real projects can
            transform the way students approach technology.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="mx-auto mt-14 max-w-4xl">

          <div className="glass-card glass-card-hover relative overflow-hidden rounded-[2rem] p-8 sm:p-12">

            {/* Decorative quote */}
            <div className="absolute right-8 top-2 font-serif text-[140px] leading-none text-[#FFE89A]/10">
              "
            </div>

            <div className="relative">

              {/* Stars */}
              <div className="flex gap-1 text-xl text-[#FFE89A]">
                ★ ★ ★ ★ ★
              </div>

              <blockquote className="mt-7 max-w-3xl text-xl font-medium leading-9 text-slate-100 sm:text-2xl sm:leading-10">
                “Yared Tech helped me move from simply watching tutorials
                to actually building real projects. The practical approach
                made learning technology much easier.”
              </blockquote>

              {/* Student */}
              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFE89A] font-bold text-[#102A43] shadow-lg">
                  MA
                </div>

                <div>
                  <p className="font-bold text-white">
                    Meron Alemu
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Web Development Student
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;