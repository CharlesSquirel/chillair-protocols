interface ProtocolFieldProp {
  title: string;
  value: string;
}

export default function ProtocolField({ title, value }: ProtocolFieldProp) {
  return (
    <div className="flex flex-col ">
      <p className="text-[16px] text-grayPrint">{title}</p>
      <p className="text-[20px] font-semibold">{value}</p>
    </div>
  );
}
