/**
 * Props interface for the Input component
 * @interface InputProps
 * @property {string} label - The label text for the input field
 * @property {string} [type='text'] - The type of input (text, password, email, etc.)
 * @property {string} value - The current value of the input field
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback function when input value changes
 * @property {string} [id] - Optional custom ID for the input field
 * @property {any} [key] - Additional props that can be passed to the input element
 */
interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  [key: string]: any;
}

/**
 * A reusable input component with label and customizable properties
 * @component
 * @param {InputProps} props - The component props
 * @returns {JSX.Element} A styled input field with label
 * 
 * @example
 * // Basic usage
 * <Input
 *   label="Username"
 *   value={username}
 *   onChange={(e) => setUsername(e.target.value)}
 * />
 * 
 * @example
 * // With custom type and ID
 * <Input
 *   label="Password"
 *   type="password"
 *   id="user-password"
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 * />
 */
function Input({ label, type = 'text', value, onChange, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded"
        {...props}
      />
    </div>
  );
}

export default Input;