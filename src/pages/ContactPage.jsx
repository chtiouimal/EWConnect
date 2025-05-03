import useSEO from "../hooks/useSeoMeta";
import ContactView from "../sections/contact/contact-view";

function ContactPage() {
  useSEO({
    title: "Contact Us - East Wind Connect",
    description:
      "Get in touch with East Wind Connect. We're ready to accelerate your company's growth through elite strategy and collaboration.",
  });
  return (
    <main id="contact-page">
      <ContactView />
    </main>
  );
}

export default ContactPage;
