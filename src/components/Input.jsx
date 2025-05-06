function Input({ label, type = 'text', value, onChange, ...props }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="mt-1 p-2 w-full border rounded"
          {...props}
        />
      </div>
    )
  }
  
  export default Input