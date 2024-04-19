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
    <div className="flex flex-col ">
      <p className="text-[16px]">
        {userFirstName} {userLastName}
      </p>
      <p className="text-[16px]">{userSignature}</p>
      <p className="text-[16px] font-semibold">{createdAt}</p>
    </div>
  );
}
