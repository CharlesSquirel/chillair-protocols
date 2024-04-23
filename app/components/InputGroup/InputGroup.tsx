interface InputGroupProps {
  children: React.ReactNode;
  title?: string;
}

export default function InputGroup({ children, title }: InputGroupProps) {
  return (
    <div className="relative flex flex-col gap-5 rounded-md border p-5 ">
      {title ? title : null}
      {children}
    </div>
  );
}
