import Container from "@/components/Container";
import ContactForm from "@/components/contact/ContactForm";
import DirectChannels from "@/components/contact/DirectChannels";
import ContactSectionHeader from "@/components/contact/ContactSectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-12 md:min-h-screen md:py-16"
    >
      <Container>
        <ContactSectionHeader />

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <ContactForm />

          <div className="space-y-5">
            <DirectChannels />
          </div>
        </div>
      </Container>
    </section>
  );
}