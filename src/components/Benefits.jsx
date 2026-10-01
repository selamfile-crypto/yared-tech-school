function Benefits() {
  const benefits = [
    {
      icon: "🚀",
      title: "Project-Based Learning",
      text: "Learn by building practical projects that turn theory into real skills.",
    },
    {
      icon: "👨‍💻",
      title: "Expert Guidance",
      text: "Get structured guidance and support while developing your technical abilities.",
    },
    {
      icon: "🎯",
      title: "Career Ready Skills",
      text: "Build practical skills that you can use in real-world technology projects.",
    },
  ];

  return (
    <section id="about" className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Why Yared Tech
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Learn. Build. Grow.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We focus on practical learning that helps students turn
            knowledge into real-world skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-500 hover:-translate-y-3 hover:bg-slate-950 hover:text-white hover:shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 transition group-hover:text-slate-300">
                {benefit.text}
              </p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-yellow-400 transition duration-500 group-hover:w-24" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Benefits;