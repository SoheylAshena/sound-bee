"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { getTranslations } from "@/utils/translations";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = getTranslations();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="bg-background/90 fixed top-0 z-50 mx-auto flex w-full items-center justify-between px-6 py-3">
      <DesktopMenu navLinks={navLinks} pathname={pathname} />

      <MobileMenu
        navLinks={navLinks}
        pathname={pathname}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
