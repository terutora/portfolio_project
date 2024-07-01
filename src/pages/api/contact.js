import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'すべてのフィールドを入力してください。' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // TLS接続を使用
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // 自己署名証明書を許可（開発環境用、本番環境では注意）
    }
  });

  try {
    console.log('Attempting to send email...');
    const info = await transporter.sendMail({
      from: `"Cheese'folio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `${name} さんからメッセージが届きました`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h1>お問い合わせが届きました</h1>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>内容:</strong></p>
        <p>${message}</p>
      `,
    });
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'メッセージが正常に送信されました。' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'メッセージの送信中にエラーが発生しました。', error: error.message });
  }
}