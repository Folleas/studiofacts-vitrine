import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Create a transporter using your email provider's SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
        });


        try {
            // Send the email
            await transporter.sendMail({
                from: process.env.SENDER_USER,
                to: process.env.RECEIVER_EMAIL,
                subject: 'New Contact Form Submission',
                text: `
                    Prénom: ${req.body.firstName}
                    Nom: ${req.body.lastName}
                    E-mail: ${req.body.email}
                    Mot de passe: ${req.body.password}
                    Confirmation du mot de passe: ${req.body.confirmPassword}
                    Société: ${req.body.company}
                    Département: ${req.body.department}
                    Droits: ${req.body.rights}
                    Adresse: ${req.body.address}
                    Ville: ${req.body.city}
                    Code postal: ${req.body.postalCode}
                    Pays: ${req.body.country}
                    Préférence: ${req.body.tags}
                `,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send email ' + error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}
