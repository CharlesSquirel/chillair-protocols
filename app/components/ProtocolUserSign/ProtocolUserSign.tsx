interface ProtocolUserSignProp {
  text: string;
}

export default function ProtocolUserSign({ text }: ProtocolUserSignProp) {
  return (
    <p className="text-blackPrint mt-[150px] w-[150px] self-end border-t-[1px] border-dotted text-right text-[18px] lowercase">
      {text}
    </p>
  );
}
