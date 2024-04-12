interface InputRowProps {
  children: React.ReactNode;
  title?: string;
}

export default function InputRow({ children, title }: InputRowProps) {
  return (
    <>
      {title ? (
        <div className="flex flex-col gap-1">
          <p>{title}</p>
          <div className="flex gap-4">{children}</div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {title && <p>{title}</p>}
          {children}
        </div>
      )}
    </>
  );
}
