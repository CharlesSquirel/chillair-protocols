interface InputRowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function InputRow({
  children,
  title,
  className,
}: InputRowProps) {
  return (
    <>
      {title ? (
        <div className="relative flex w-full flex-col gap-1">
          <p>{title}</p>
          <div className="flex flex-col gap-4 min-[1680px]:flex-row">
            {children}
          </div>
        </div>
      ) : (
        <div
          className={`flex gap-4 ${className ? className + " gap-0 " : ""} w-full flex-col min-[1680px]:flex-row print:flex-row`}
        >
          {title && <p>{title}</p>}
          {children}
        </div>
      )}
    </>
  );
}
