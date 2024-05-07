interface ProtocolFieldProp {
  title: string;
  value: string | number | null;
  secondaryValue?: string | number;
  secondaryTitle?: string;
  unit?: string;
}

export default function ProtocolField({
  title,
  value,
  secondaryValue,
  secondaryTitle,
  unit,
}: ProtocolFieldProp) {
  return (
    <div className="flex flex-col ">
      <p className="text-[18px] text-grayPrint print:text-[14px]">{title}</p>
      <p className="text-[22px] font-semibold print:text-[17px]">
        {`${value} ${unit ? unit : ""}${secondaryValue ? ", " + secondaryValue : ""} ${secondaryTitle ? secondaryTitle : ""}`}
      </p>
    </div>
  );
}
