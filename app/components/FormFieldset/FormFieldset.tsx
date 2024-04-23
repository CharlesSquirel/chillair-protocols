interface FormFieldsetProps {
  children: React.ReactNode;
  title?: string;
}

export default function FormFieldset({ children, title }: FormFieldsetProps) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <h3 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
