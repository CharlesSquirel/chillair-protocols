interface ProtocolFieldProp {
  title: string;
  value: string;
}

export default function ProtocolField({ title, value }: ProtocolFieldProp) {
  return (
    <div className="flex flex-col">
      <p className="text-grayPrint text-[14px]">{title}</p>
      <p className="text-blackPrint text-[14px]">{value}</p>
    </div>
  );
}
