import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMail = async ({ to, subject, html }) => {
  try {
    return await transporter.sendMail({
      from: `"Support" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('SMTP ERROR', error.message);
    throw error;
  }
};
