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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const EmailTemplate = ({ name, email, phone, message }) => {
  return (
    <Html>
      <Head />
      <Preview>Contact request from RDR Solutions</Preview>

      <Tailwind>
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
                <Text className="">
                  <strong>Name:</strong> {name}
                </Text>
                <Text>
                  <strong>From:</strong> {email}
                </Text>
                <Text>
                  <strong>Phone:</strong> {phone}
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
