import clsx from "clsx";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLogo from "./NavLogo";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  pathname: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, pathname, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="w-full md:hidden">
      <div className="flex items-center justify-between">
        <NavLogo />
        <HamburgerMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      <div
        className={clsx(
          "bg-background/90 fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  "text-primary hover:text-accent text-xl font-medium transition-all duration-300 ease-in-out group-hover:scale-110",
                  isActive && "text-accent scale-105",
                )}
              >
                {link.label}
              </Link>
              <hr
                className={clsx(
                  "border-accent mt-1 border-t-2 transition-all duration-300 ease-in-out",
                  isActive ? "w-full opacity-100" : "w-0 opacity-50 group-hover:w-full group-hover:opacity-100",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
