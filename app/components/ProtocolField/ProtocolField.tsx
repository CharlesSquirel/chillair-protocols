interface ProtocolFieldProp {
  title: string;
  value: string;
}

export default function ProtocolField({ title, value }: ProtocolFieldProp) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-grayPrint text-[14px]">{title}</p>
      <p className="text-[14px] font-semibold">{value}</p>
    </div>
  );
}
