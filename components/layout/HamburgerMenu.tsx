import React from "react";
import clsx from "clsx";

interface HamburgerMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <button
      className="z-50 p-2 md:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      aria-label="Toggle menu"
    >
      <div className="space-y-2">
        <span
          className={clsx(
            "bg-primary block h-0.5 w-8 transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-2.5 rotate-45" : "",
          )}
        ></span>
        <span
          className={clsx(
            "bg-primary block h-0.5 w-8 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-0" : "",
          )}
        ></span>
        <span
          className={clsx(
            "bg-primary block h-0.5 w-8 transition-transform duration-300",
            isMobileMenuOpen ? "-translate-y-2.5 -rotate-45" : "",
          )}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
