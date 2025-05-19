import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          height={40}
          width={40}
          src="/logo.svg"
          alt="logo"
          className="group z-50 flex items-center gap-3 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="font-oneday text-primary group-hover:text-accent z-50 text-2xl transition-colors">
          SoundBee
        </span>
      </div>
    </Link>
  );
};

export default NavLogo;
