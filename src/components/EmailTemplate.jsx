"use client";

import {
  Html,
  Text,
  render,
  Body,
  Head,
  Preview,
  Container,
  Section,
  Img,
  Row,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

import Footer from "./Footer";

const EmailTemplate = ({ name, email, phone, message }) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Contact request from RDR Solutions</Preview>

        <Body className="bg-[#3E5D9D] mt-5 mx-auto text-white font-sans px-2 flex flex-col min-h-screen">
          <Container>
            <Section>
              <Img
                src={"/assets/images/LogoBlue.webp"}
                width="105"
                height="30"
                alt="Logo"
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

          <Footer />
        </Body>
      </Tailwind>
    </Html>
  );
};

export const EmailTemplateHtml = (props) =>
  render(<EmailTemplate {...props} />, {
    pretty: true,
  });
