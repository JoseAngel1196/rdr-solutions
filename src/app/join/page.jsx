import Form from "@/components/Form";

export const metadata = {
  title: "Join our team",
  description:
    "Salespeople and distributors: grow with RDR Solutions. Send us a message.",
  alternates: { canonical: "/join" },
};

export default function Index() {
  return (
    <section id="join">
      <Form variant="join" />
    </section>
  );
}
