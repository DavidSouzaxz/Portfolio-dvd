import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  name?: string;
  userImage?: string;
  message?: string;
  teamName?: string;
  inviteLink?: string;
}

const baseUrl = process.env.IMG_URL
  ? `https://${process.env.IMG_URL}`
  : '';

const portfolio = process.env.PORTFOLIO_LINK


export const EmailTemplate = ({
  name,
  message,
}: EmailTemplateProps) => {
  const previewText = `Join Portfólio on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}`}
                width="40"
                height="37"
                alt="Vercel"
                className="mx-auto my-0 rounded-full"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
              Mensagem de <strong>Portfólio</strong>
            </Heading>
            <Text className="text-[14px] text-black leading-[24px]">
              Hello, I'am {name},
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
            <Text className="text-[14px] text-black leading-[24px]">
              {message}
            </Text>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline cursor-pointer"
                href={portfolio}
              >
                Ir para Portfólio
              </Button>
            </Section>
            <Text className="text-[14px] text-black leading-[24px]">
              or copy and paste this URL into your browser:{' '}
              <Link href={portfolio} className="text-blue-600 no-underline">
                {portfolio}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default EmailTemplate;
