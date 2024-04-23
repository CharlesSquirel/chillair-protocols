interface ProtocolFieldProp {
  title: string;
  value: string;
}

export default function ProtocolField({ title, value }: ProtocolFieldProp) {
  return (
    <div className="flex flex-col ">
      <p className="text-[18px] text-grayPrint print:text-[17px]">{title}</p>
      <p className="text-[22px] font-semibold print:text-[21px]">{value}</p>
    </div>
  );
}
