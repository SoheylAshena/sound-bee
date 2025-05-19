import { getTranslations, replaceVariables } from "@/utils/translations";

const Footer = () => {
  const t = getTranslations();

  return (
    <footer className="bg-secondary p-5">
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-oneday text-primary mb-4 text-xl">{t.general.brandName}</h3>
            <p className="text-text/80">{t.general.tagline}</p>
          </div>

          <div>
            <h4 className="text-primary mb-4 font-bold">{t.footer.contact.title}</h4>
            <div className="text-text/80 space-y-2">
              <p>ایمیل: {t.footer.contact.email}</p>
              <p>تلفن: {t.footer.contact.phone}</p>
              <p>آدرس: {t.footer.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-text/10 mt-8 border-t pt-8">
          <p className="text-text/60 text-center">
            {replaceVariables(t.general.copyright, { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
