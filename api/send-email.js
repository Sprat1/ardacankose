import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const { data, error } = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>',
                to: ['ardacankos@gmail.com'], // Replace with your actual email if needed
                subject: `New message from ${name}`,
                reply_to: email,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            if (error) {
                return res.status(400).json({ error });
            }

            return res.status(200).json({ data });
        } catch (error) {
            return res.status(500).json({ error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
