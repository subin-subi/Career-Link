export default function BasicInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6">
      
      {/* Section Title */}
      <div className="mb-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Basic Information
        </h3>
        <p className="text-sm text-gray-500">
          Update your personal and contact details
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side - Inputs */}
        <div className="space-y-4">
          <Input label="Full Name" value="Sarah Johnson" />
          <Input label="Email" value="sarah@jeemail.com" type="email" />
          <Input label="Phone" value="(123) 456-7890" type="tel" />
          <Input label="Location" value="Los Angeles, CA" />
          <Input label="Website" value="www.sarahjohnson.com" />
        </div>

        {/* Right Side - Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Summary
          </label>

          <textarea
            rows="6"
            className="w-full border border-gray-300 rounded-lg p-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            defaultValue="Experienced marketing specialist with a passion for creative campaigns and strategic growth."
          />
        </div>

      </div>
    </div>
  );
}


/* Reusable Input Component */
function Input({ label, value, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="
          w-full
          border border-gray-300
          rounded-lg
          p-3
          text-sm md:text-base
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
}