import { PropsWithChildren } from "react";

export default function ProtocolBoardInfoContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col justify-between gap-2 lg:flex-row lg:gap-0 print:flex-col print:gap-0">
      {children}
    </div>
  );
}
