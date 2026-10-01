function CourseCard({ title, description, level, price, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

      {/* Decorative circle */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 transition duration-500 group-hover:scale-150" />

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950 text-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        {icon}
      </div>

      {/* Level */}
      <span className="mt-6 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">
        {level}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

        <div>
          <p className="text-xs text-slate-400">
            Course Price
          </p>

          <p className="text-xl font-extrabold text-slate-900">
            {price}
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-yellow-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Learn More
        </button>

      </div>

    </div>
  );
}

export default CourseCard;