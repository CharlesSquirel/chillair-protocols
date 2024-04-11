import { PropsWithChildren } from "react";

export default function InputGroup({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-5 rounded-md border p-5">{children}</div>
  );
}
