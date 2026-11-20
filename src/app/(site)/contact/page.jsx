import Form from "@/components/Form";

export const metadata = {
  title: "Contact",
  description:
    "Tell RDR Solutions about your idea or your business. Email, call or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function Index() {
  return (
    <section id="contact">
      <Form variant="contact" />
    </section>
  );
}
