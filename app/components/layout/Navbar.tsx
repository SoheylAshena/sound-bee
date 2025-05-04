import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-background/95 fixed top-0 z-50 w-full backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-oneday text-primary text-2xl">Sound Bee</span>
        </Link>

        <div className="flex space-x-8">
          <Link href="/" className="text-text hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-text hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-text hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
