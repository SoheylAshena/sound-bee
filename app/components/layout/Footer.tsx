const Footer = () => {
  const brands = [
    "JBL",
    "CROWN",
    "HARMAN",
    "YAMAHA",
    "AKG",
    "DB TECHNOLOGY",
    "DYNACORD",
    "MACKIE",
    "FOCAL",
    "BOSE",
    "FBT",
    "RCF",
    "Bang & Olufsen",
    "ICE power",
    "Electro Voice",
    "Montarbo",
    "Behringer",
    "Pascal",
    "DBX",
  ];

  return (
    <footer className="bg-secondary mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-oneday text-primary mb-4 text-xl">Sound Bee</h3>
            <p className="text-text/80">Your trusted workshop for premium sound bar repairs</p>
          </div>

          <div>
            <h4 className="text-primary mb-4 font-bold">Brands We Service</h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span key={brand} className="text-text/60 text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary mb-4 font-bold">Contact Info</h4>
            <div className="text-text/80 space-y-2">
              <p>Email: contact@soundbee.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Audio Street, Soundville</p>
            </div>
          </div>
        </div>

        <div className="border-text/10 mt-8 border-t pt-8">
          <p className="text-text/60 text-center">© {new Date().getFullYear()} Sound Bee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
