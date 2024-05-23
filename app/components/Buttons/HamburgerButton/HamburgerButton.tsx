"use client";

import HamburgerIcon from "@/assets/icons/HamburgerIcon";
import { useMobileContext } from "../../Providers/MobileMenuContext/MobileMenuContext";

export default function HamburgerButton() {
  const { handleMobileOpen } = useMobileContext();

  return (
    <button className="lg:hidden" onClick={() => handleMobileOpen(true)}>
      <HamburgerIcon className="size-11" />
    </button>
  );
}
