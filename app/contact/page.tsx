import { getTranslations } from "../../utils/translations";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const { contact } = getTranslations();

  return (
    <div className="bg-background">
      <section className="bg-secondary relative py-32">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-oneday text-primary mb-6 text-center text-4xl md:text-5xl">{contact.title}</h1>
          <p className="text-text/90 mx-auto max-w-3xl text-center text-lg">{contact.description}</p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)]" />
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-oneday text-primary mb-8 text-2xl">{contact.getInTouch.title}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-text mb-2 block">
                    {contact.getInTouch.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-secondary text-text border-text/10 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-text mb-2 block">
                    {contact.getInTouch.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-secondary text-text border-text/10 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-text mb-2 block">
                    {contact.getInTouch.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="bg-secondary text-text border-text/10 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-secondary rounded-lg px-8 py-3 font-semibold transition-colors"
                >
                  {contact.getInTouch.submitButton}
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-oneday text-primary mb-8 text-2xl">{contact.contactInfo.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h3 className="text-text text-lg font-semibold">{contact.contactInfo.phone.title}</h3>
                    <p className="text-text/80">{contact.contactInfo.phone.number}</p>
                    <p className="text-text/60">{contact.contactInfo.phone.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h3 className="text-text text-lg font-semibold">{contact.contactInfo.email.title}</h3>
                    <p className="text-text/80">{contact.contactInfo.email.address}</p>
                    <p className="text-text/60">{contact.contactInfo.email.responseTime}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary mt-1 h-6 w-6" />
                  <div>
                    <h3 className="text-text text-lg font-semibold">{contact.contactInfo.address.title}</h3>
                    <p className="text-text/80">{contact.contactInfo.address.line1}</p>
                    <p className="text-text/80">{contact.contactInfo.address.line2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
