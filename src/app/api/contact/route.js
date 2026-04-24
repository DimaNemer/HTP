import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Check if the required fields are present
    if (!data.firstName || !data.lastName || !data.email || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, company, service, multiServices, message } = data;
    
    // For local testing, we send to the configured email or default fallback
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || 'dimanemer2003@gmail.com';
    
    // Only logged in Resend free accounts can send to their own verified domains or the registered email address.
    // That means 'toEmail' must be the email you used to register Resend (for testing without a domain).

    const emailResponse = await resend.emails.send({
      from: 'HTP Book Consultancy <onboarding@resend.dev>', // Default testing domain provided by Resend
      to: [toEmail],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company/Industry:</strong> ${company || 'N/A'}</p>
        <p><strong>Primary Service:</strong> ${service}</p>
        <p><strong>Multiple Services:</strong> ${multiServices?.length ? multiServices.join(', ') : 'None'}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\\n/g, '<br/>') : 'No message provided.'}</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API returned error:", emailResponse.error);
      return NextResponse.json({ error: emailResponse.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: emailResponse.data?.id });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
