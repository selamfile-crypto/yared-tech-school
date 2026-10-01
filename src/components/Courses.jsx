import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build modern websites and web applications using React, Node.js, Express, and databases.",
    level: "Beginner",
    price: "$120",
    icon: "💻",
  },
  {
    title: "Python Programming",
    description:
      "Learn Python from the fundamentals and create practical programming projects.",
    level: "Beginner",
    price: "$90",
    icon: "🐍",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Explore machine learning and AI concepts while building practical intelligent applications.",
    level: "Intermediate",
    price: "$150",
    icon: "🤖",
  },
  {
    title: "Mobile App Development",
    description:
      "Learn how to design and build useful mobile applications for real-world problems.",
    level: "Intermediate",
    price: "$130",
    icon: "📱",
  },
];

function Courses() {
  return (
    <section
      id="courses"
      className="bg-slate-50 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Our Courses
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Learn Skills That Matter
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical technology courses designed to help you
            learn, build, and prepare for the real world.
          </p>

        </div>

        {/* Course Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              level={course.level}
              price={course.price}
              icon={course.icon}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;