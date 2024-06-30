import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Bad request: Missing required fields' });
  }

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to site owner
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h1>New contact form submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send auto-reply to the user
    await transporter.sendMail({
      from: `"Cheese's Portfolio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for your message',
      text: `
        Dear ${name},

        Thank you for contacting me. I have received your message and will get back to you as soon as possible.

        Best regards,
        Yuki
      `,
      html: `
        <h1>Thank you for your message</h1>
        <p>Dear ${name},</p>
        <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Cheese</p>
      `,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}