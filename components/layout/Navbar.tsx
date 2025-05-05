"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "../../utils/translations";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const t = getTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${isScrolled ? "bg-background/90 shadow-lg" : "bg-background/50"} ${isMobileMenuOpen ? "h-screen sm:h-auto" : ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
              <Image fill src="/logo.svg" alt="logo" className="object-contain" />
            </div>
            <span className="font-oneday text-primary group-hover:text-accent text-2xl transition-colors">
              {t.general.brandName}
            </span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="z-50 p-2 sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span
              className={`bg-primary block h-0.5 w-8 transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-2.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`bg-primary block h-0.5 w-8 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`bg-primary block h-0.5 w-8 transition-transform duration-300 ${isMobileMenuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className={`items-center gap-8 max-sm:hidden sm:flex`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md relative font-medium transition-colors duration-300 ${isActive ? "text-accent" : "text-primary hover:text-accent"} after:bg-accent after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:rounded-sm after:transition-all after:duration-300 ${isActive ? "after:w-full" : "hover:after:w-full"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div
          className={`bg-background/95 fixed inset-0 backdrop-blur-sm transition-transform duration-300 sm:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-medium transition-all duration-300 ${isActive ? "text-accent scale-110" : "text-primary hover:text-accent hover:scale-110"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
