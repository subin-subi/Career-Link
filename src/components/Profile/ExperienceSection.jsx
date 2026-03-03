export default function ExperienceSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Experience
          </h3>
          <p className="text-sm text-gray-500">
            Add your work history and achievements
          </p>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4">
        <ExperienceCard
          title="Marketing Specialist"
          company="ABC Company"
          duration="2019 - Present"
          description="Managing digital campaigns and social media strategy."
        />

        <ExperienceCard
          title="Marketing Coordinator"
          company="XYZ Inc."
          duration="2016 - 2019"
          description="Assisted in content creation and market research."
        />
      </div>

      {/* Add Button */}
      <button className="mt-6 w-full md:w-auto bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
        + Add Experience
      </button>
    </div>
  );
}


function ExperienceCard({ title, company, duration, description }) {
  return (
    <div className="
      border border-gray-200
      rounded-xl
      p-4 md:p-5
      hover:shadow-md
      transition
      bg-gray-50
    ">
      
      {/* Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h4 className="text-base md:text-lg font-semibold text-gray-800">
          {title}
        </h4>
        <span className="text-sm text-gray-500">
          {duration}
        </span>
      </div>

      {/* Company */}
      <p className="text-sm text-gray-600 mt-1">
        {company}
      </p>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-700 mt-3 leading-relaxed">
        {description}
      </p>

    </div>
  );
}