function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#163F5C] to-[#1F5875] px-6 py-24 text-white md:py-28"
    >

      {/* Background decoration */}
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#5BB5D2]/10 blur-3xl" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#FFE89A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center fade-up">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFE89A]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Let's Start
            <span className="text-[#FFE89A]"> Building.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Have a question about our courses or want to start your
            technology journey? We'd love to hear from you.
          </p>

        </div>

        {/* Contact layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <div className="glass-card rounded-[2rem] p-8 sm:p-10 fade-up-delay-1">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFE89A]">
              Contact Information
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              We are here to help.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Whether you want to learn web development, Python,
              artificial intelligence, or mobile development,
              our team is ready to help you take the next step.
            </p>

            {/* Information items */}
            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFE89A] text-xl text-[#102A43]">
                  ✉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-white">
                    info@yaredtech.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFE89A] text-xl text-[#102A43]">
                  ☎
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-white">
                    +251 900 000 000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFE89A] text-xl text-[#102A43]">
                  ◉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

            </div>

            {/* Availability */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="flex items-center gap-3">

                <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#FFE89A]" />

                <p className="font-semibold">
                  We're available
                </p>

              </div>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Send us a message and we'll get back to you as soon
                as possible.
              </p>

            </div>

          </div>

          {/* Contact form */}
          <form className="glass-card rounded-[2rem] p-6 sm:p-8 fade-up-delay-2">

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#102A43]/60 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-[#FFE89A]/70 focus:ring-2 focus:ring-[#FFE89A]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#102A43]/60 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-[#FFE89A]/70 focus:ring-2 focus:ring-[#FFE89A]/20"
                />
              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Subject
              </label>

              <input
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-xl border border-white/10 bg-[#102A43]/60 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-[#FFE89A]/70 focus:ring-2 focus:ring-[#FFE89A]/20"
              />

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#102A43]/60 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-[#FFE89A]/70 focus:ring-2 focus:ring-[#FFE89A]/20"
              />

            </div>

            <button
              type="submit"
              className="group mt-6 w-full rounded-xl bg-[#FFE89A] px-6 py-4 font-bold text-[#102A43] transition duration-300 hover:-translate-y-1 hover:bg-yellow-200 hover:shadow-xl hover:shadow-yellow-200/10 focus:outline-none focus:ring-2 focus:ring-[#FFE89A]"
            >
              Send Message

              <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;