interface ProtocolBoardContainerProps {
  children: React.ReactNode;
  title: string;
}

export default function ProtocolBoardContainer({
  children,
  title,
}: ProtocolBoardContainerProps) {
  return (
    <section className="flex w-full flex-col gap-4 rounded-md border bg-grayTable px-10 py-4">
      <h3 className="text-[20px] font-semibold">{title}</h3>
      {children}
    </section>
  );
}
