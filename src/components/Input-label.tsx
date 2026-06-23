import InputText from "./Input-text";

interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
}

export default function InputLabel({ label, id, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>

      <InputText
        id={id}
        placeholder={placeholder}
        className="border w-full px-3 py-2"
      />
    </div>
  );
}
