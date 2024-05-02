import { PropsWithChildren } from "react";

export default function ProtocolFieldContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col justify-between gap-4 md:flex-row print:flex-row">
      {children}
    </div>
  );
}
