
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.NEXT_PUBLIC_EMAIL_TO;
const fromEmail = process.env.NEXT_PUBLIC_EMAIL_FROM || 'onboarding@resend.dev'; // Default or use another env var

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Basic server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    if (!toEmail) {
        console.error('Error: Email destination (NEXT_PUBLIC_EMAIL_TO) is not configured.');
        return NextResponse.json({ error: 'Error de configuración del servidor.' }, { status: 500 });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error('Error: Resend API Key (RESEND_API_KEY) is not configured.');
        return NextResponse.json({ error: 'Error de configuración del servidor.' }, { status: 500 });
    }

    // Construct HTML content for the email
    const htmlContent = `
      <h1>Nuevo Lead - Mapa de Objeciones</h1>
      <p>Se ha registrado un nuevo lead a través del formulario del Linktree:</p>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Correo Electrónico:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
      </ul>
      <p>Por favor, haz seguimiento.</p>
    `;

    const { data, error } = await resend.emails.send({
      from: `Hugo Herrera Coach <${fromEmail}>`, // Using a more descriptive sender name
      to: [toEmail],
      subject: 'Nuevo lead - Mapa de Objeciones',
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }

    // Optionally, you could also send a confirmation email to the user here

    return NextResponse.json({ message: 'Correo enviado exitosamente', data }, { status: 200 });

  } catch (err) {
    console.error('API Route Error:', err);
    // Check if it's a JSON parsing error
    if (err instanceof SyntaxError) {
        return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

