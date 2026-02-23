import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const { data, error } = await resend.emails.send({
                from: 'Contact Form <onboarding@resend.dev>',
                to: ['ardakose212@gmail.com'], // Updated to the new email
                subject: `New message from ${name}`,
                reply_to: email,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            if (error) {
                console.error('Resend API Error:', error);
                return res.status(400).json({ error: error.message || error });
            }

            return res.status(200).json({ data });
        } catch (error) {
            console.error('Server Function Error:', error);
            return res.status(500).json({ error: error.message || error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
