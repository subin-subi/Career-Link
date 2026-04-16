function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="mb-5">
      <label className="block font-semibold mb-2">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">
          Select {label.toLowerCase()}
        </option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;