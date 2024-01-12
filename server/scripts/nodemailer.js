import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
    },
    secure: false,
    tls: {
        rejectUnauthorized: false
    }
});

export async function sendEmail(email, title, message) {
    return await transporter.sendMail({
        from: `"${process.env.SMTP_USER}" <${process.env.SMTP_EMAIL}>`,
        to: email,
        subject: `${title}`,
        text: `${message}`,
        html: `<b>${message}</b>`,
    });
}
