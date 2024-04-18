interface ProtocolUserSignProp {
  text: string;
}

export default function ProtocolUserSign({ text }: ProtocolUserSignProp) {
  return (
    <p className="text-blackPrint relative text-[13px] lowercase after:absolute after:right-0 after:top-0 after:h-[1px] after:w-[117px] after:bg-[#BCB0C4] after:content-[``]">
      {text}
    </p>
  );
}
