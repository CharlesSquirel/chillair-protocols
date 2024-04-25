interface ProtocolBasicInfoProp {
  userSignature: string;
  createdAt: string;
  userFirstName: string;
  userLastName: string;
}

export default function ProtocolBasicInfo({
  userFirstName,
  userLastName,
  userSignature,
  createdAt,
}: ProtocolBasicInfoProp) {
  return (
    <div className="flex flex-col gap-2 leading-none">
      <p className="text-[23px]">
        {userFirstName} {userLastName}
      </p>
      <p className="text-[23px]">{userSignature}</p>
      <p className="text-[23px] font-semibold">{createdAt}</p>
    </div>
  );
}
