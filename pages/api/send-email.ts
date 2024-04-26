import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Create a transporter using your email provider's SMTP settings
        const params: any = {
            service: 'ovh',
            name: 'studiofact.fr',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
        }
        console.log("params")        
        console.log(params)        
        const transporter = nodemailer.createTransport(params);
        const body: any = JSON.parse(req.body)

        try {
            // Send the email
            await transporter.sendMail({
                from: process.env.SENDER_EMAIL,
                to: process.env.SENDER_EMAIL,
                subject: 'Nouvelle tentative d\'inscription | Société : ' + body.company,
                text: `
                    Prénom: ${body.firstName}
                    Nom: ${body.lastName}
                    E-mail: ${body.email}
                    Mot de passe: ${body.password}
                    Confirmation du mot de passe: ${body.confirmPassword}
                    Société: ${body.company}
                    Département: ${body.department}
                    Droits: ${body.rights}
                    Adresse: ${body.address}
                    Ville: ${body.city}
                    Code postal: ${body.postalCode}
                    Pays: ${body.country}
                    Préférence: ${body.tags}
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
