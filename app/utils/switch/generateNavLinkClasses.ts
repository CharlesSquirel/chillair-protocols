export const generateLinkClasses = (index: number): string => {
  const afterClasses =
    index !== 8
      ? "after:absolute after:right-[-20px] after:top-[50%] after:h-[33px] after:w-[1px] after:translate-y-[-50%] after:bg-grayPrint after:content-['']"
      : "";
  const basicClasses = "relative hover:text-primary";
  let responsiveClasses = "";
  switch (index) {
    case 0:
      responsiveClasses = "pr-2 after:hidden md:after:block";
      break;
    case 1:
      responsiveClasses = "hidden md:list-item px-2";
      break;
    case 2:
      responsiveClasses = "hidden md:list-item px-2";
      break;
    case 3:
      responsiveClasses =
        "hidden md:list-item lg:hidden min-[1170px]:list-item px-2";
      break;

    case 4:
      responsiveClasses = "hidden min-[1450px]:list-item px-2";
      break;
    case 5:
      responsiveClasses = "hidden min-[1640px]:list-item px-2";
      break;
    case 6:
      responsiveClasses = "hidden min-[1790px]:list-item px-2";
      break;
    case 7:
      responsiveClasses = "hidden min-[1880px]:list-item px-2";
      break;
    case 8:
      responsiveClasses = "hidden min-[1980px]:list-item pl-2";
      break;
    default:
      return "";
  }
  return `${basicClasses} ${afterClasses} ${responsiveClasses}`;
};
