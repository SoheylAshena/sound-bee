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
          "fixed top-18 left-0 flex h-[calc(100vh-4.5rem)] w-full flex-col items-center justify-center gap-6 transition-all duration-500",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
          "bg-background/90",
        )}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div
              key={link.href}
              className="group relative w-4/5 max-w-xs transform transition-all duration-300 ease-in-out active:scale-105"
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  "flex w-full justify-center rounded-lg py-3 text-2xl font-semibold tracking-wide transition-all duration-300",
                  isActive ? "bg-accent/10 text-accent shadow-lg" : "text-primary active:text-accent",
                )}
              >
                {link.label}
              </Link>
              <div
                className={clsx(
                  "bg-accent absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 transform rounded-full transition-all duration-300",
                  isActive ? "w-1/2 opacity-100" : "w-0 opacity-0 group-active:w-1/3 group-active:opacity-70",
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
