interface SelectInputProps {
  label: string;
  placeholder?: string;
  name: string;
  data: string[];
  className?: string;
}

export default function SelectInput({
  label,
  placeholder,
  name,
  data,
  className,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        className={`flex flex-col gap-1 rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none ${className}`}
      >
        <option value="" disabled selected className="text-placeholder">
          {`${placeholder}`}
        </option>
        {data.map((data) => (
          <option value={data} key={data}>
            {data}
          </option>
        ))}
      </select>
      <p role="alert" className="text-error">
        Invalid {label}!
      </p>
    </div>
  );
}
