interface FormFieldsetProps {
  children: React.ReactNode;
  title?: string;
}

export default function FormFieldset({ children, title }: FormFieldsetProps) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      )}
      {children}
    </div>
  );
}
