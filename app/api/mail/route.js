// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const { name, email, subject, message } = req.body;

        // Replace these with your actual email service settings
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'anujagrawal1804@gmail.com',
                pass: 'eynk bvui eqzd hnnv',
            },
        });

        const mailOptions = {
            from: email,
            to: 'anujagrawal1804@gmail.com',
            subject: subject,
            text: `name = ${name}, email = ${email}, message = ${message}`,
            html: `
            <h1>Hello Anuj Agrawal</h1>
            <p>${message}</p>
            <p>Thanks</p>
            <p>Regards</p>
            <p>${name}</p>
            <p>${email}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: "Email sent successfully"});
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "An error occurred while sending the email" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}