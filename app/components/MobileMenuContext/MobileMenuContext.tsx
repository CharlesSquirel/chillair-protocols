"use client";

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface MobileContextInterface {
  isMobileActive: boolean;
  setIsMobileActive: React.Dispatch<SetStateAction<boolean>>;
  handleMobileClose: React.Dispatch<SetStateAction<boolean>>;
  handleMobileOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const MobileContext = createContext<MobileContextInterface | null>(null);

export default function MobileMenuContext({ children }: PropsWithChildren) {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const handleMobileClose = () => {
    setIsMobileActive(false);
  };
  const handleMobileOpen = () => {
    setIsMobileActive(true);
  };
  return (
    <MobileContext.Provider
      value={{
        isMobileActive,
        setIsMobileActive,
        handleMobileClose,
        handleMobileOpen,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
}

export const useMobileContext = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("Mobile Context is null!");
  }
  return context;
};
