import clsx from "clsx";
import Link from "next/link";
import NavLogo from "./NavLogo";

interface DesktopMenuProps {
  navLinks: { href: string; label: string }[];
  pathname: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navLinks, pathname }) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between max-md:hidden">
      <NavLogo />

      <div className={`flex gap-8`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-md relative font-medium transition-colors duration-300",
                "after:bg-accent after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-0 after:rounded-sm after:transition-all after:duration-300",

                isActive ? "text-accent" : "text-primary hover:text-accent",
                isActive ? "after:w-full" : "hover:after:w-full",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenu;
