import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface NumberInputProps {
  label: string;
  placeholder: string;
  name: string;
  defaultValues?: any;
  arrayName?: string;
}

export default function NumberInput({
  label,
  placeholder,
  name,
  defaultValues,
  arrayName,
}: NumberInputProps) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (
      defaultValues &&
      (arrayName === "refrigerationCircuits" ||
        arrayName === "settingsTemperature")
    ) {
      const index = Number(name.at(-1));
      setValue(name, defaultValues[arrayName][index]);
    } else if (defaultValues && arrayName) {
      const index = name.charAt(arrayName.length + 1);
      if (defaultValues[arrayName][index]) {
        const restOfName = name.slice(name.indexOf(index) + 2);
        const editValue = defaultValues[arrayName][index][restOfName];
        setValue(name, editValue);
      }
    } else if (defaultValues) {
      setValue(name, defaultValues[name]);
    }
  }, [setValue, name, defaultValues, arrayName]);

  return (
    <div className="h-min-[106px] flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="md:text-1 text-[14px] sm:text-[15px]">
          {label}
        </label>
      )}
      <input
        type="number"
        placeholder={placeholder}
        id={name}
        step={0.1}
        className="h-[45px] w-full rounded-md border border-primary bg-inputBg p-3 placeholder:text-placeholder focus:border-green focus:bg-white focus:outline-none md:h-[50px] md:w-[520px]"
        {...register(name, { valueAsNumber: true })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p role="alert" className="text-error">
            {message}
          </p>
        )}
      />
    </div>
  );
}
