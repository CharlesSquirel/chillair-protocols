interface ProtocolBasicInfoProp {
  userName: string;
  userSignature: string;
  createdAt: string;
}

export default function ProtocolBasicInfo({
  userName,
  userSignature,
  createdAt,
}: ProtocolBasicInfoProp) {
  return (
    <div className="flex flex-col">
      <p className="text-blackPrint text-[16px]">{userName}</p>
      <p className="text-blackPrint text-[16px]">{userSignature}</p>
      <p className="text-blackPrint text-[16px]">{createdAt}</p>
    </div>
  );
}
