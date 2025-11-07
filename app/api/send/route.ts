import { render } from '@react-email/render';
import EmailTemplate from '../../../src/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  try {
    const html = await render(EmailTemplate({ name: name, message: message }));

    const data = await resend.emails.send({
      from: email,
      to: 'daviddavi1221@gmail.com',
      subject: 'Nova mensagem de portfólio!',
      html,
    });

    if (data.error) {
      return NextResponse.json({
        success: false,
        message: 'Só é possível enviar e-mails com domínios particulares.',
      });
    } else {
      return NextResponse.json({ success: true, data });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'Ocorreu um erro ao tentar enviar o e-mail. Tente novamente mais tarde.',
    });
  }
}
