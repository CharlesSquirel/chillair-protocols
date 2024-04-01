import { MutableRefObject, useEffect, useState } from "react";

export default function useScrollPosition(ref: MutableRefObject<any>) {
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current.scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      ref.current.addEventListeners("scroll", handleScroll);
      return () => {
        ref.current.removeEventListeners("scroll", handleScroll);
      };
    };
  }, [ref]);
  return isAtTop;
}
