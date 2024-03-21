import {
  Html,
  Text,
  Body,
  Head,
  Preview,
  Container,
  Section,
  Img,
  Row,
  Font,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/emails`
  : "";

const devData = {
  name: "Dev Name",
  email: "JpUzK@example.com",
  phone: "541234567",
  message: "Dev Message",
};

const EmailTemplate = ({
  name = devData.name,
  email = devData.email,
  phone = devData.phone,
  message = devData.message,
}) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
            format: "embedded-opentype",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <Font
          fontFamily="Fraunces"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&display=swap",
            format: "embedded-opentype",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>

      <Preview>Contact request from RDR Solutions</Preview>

      <Tailwind
        config={{
          extend: {
            fontFamily: {
              sans: ["var(--font-poppins)"],
              header: ["var(--font-fraunces)"],
            },
          },
        }}
      >
        <Body className="bg-[#3E5D9D] mt-5 mx-auto text-white font-sans px-2 flex flex-col">
          <Container>
            <Section>
              <Img
                src={`${baseUrl}/static/LogoBlue.webp`}
                width="150"
                height="50"
                alt="Logo"
                className="w-[150px] h-[50px] object-contain"
              />
            </Section>

            <Section className="mb-5">
              <Row>
                <Text className="text-2xl font-medium font-header tracking-tight select-none">
                  Contact request from RDR Solutions
                </Text>

                <Text>
                  <strong>Name:</strong> {name}
                </Text>

                <Text>
                  <strong>From: </strong>
                  <Link href={`mailto:${email}`} className="text-white underline">
                    {email}
                  </Link>
                </Text>

                <Text>
                  <strong>Phone: </strong>
                  <Link href={`tel:${phone}`} className="text-white underline">
                    {phone}
                  </Link>
                </Text>

                <Text>
                  <strong>Message: </strong>
                  <br />
                  {message}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
