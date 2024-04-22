interface ProtocolUserSignProp {
  text: string;
}

export default function ProtocolUserSign({ text }: ProtocolUserSignProp) {
  return (
    <p className="text-blackPrint w-[150px] self-end border-t-[1px] border-dotted text-right text-[16px] lowercase">
      {text}
    </p>
  );
}
