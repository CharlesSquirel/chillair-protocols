interface ProtocolBoardFieldProps {
  label: string;
  value: string | number | null;
  unit?: string;
  secondaryValue?: number;
  secondaryLabel?: string;
}

export default function ProtocolBoardField({
  label,
  value,
  unit,
  secondaryLabel,
  secondaryValue,
}: ProtocolBoardFieldProps) {
  return (
    <li className="print:text-[13px]">
      {`${label} – `}{" "}
      <span className="font-semibold">{`${value} ${unit ? unit : ""}`}</span>
      <span className="font-semibold">
        {`${secondaryValue ? ", " + secondaryValue : ""}`}
        {`${secondaryLabel ? " " + secondaryLabel : ""}`}
      </span>
    </li>
  );
}
