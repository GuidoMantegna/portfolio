import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, subject, message } = req.body

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `[Portfolio] ${subject}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
           <p><strong>Message:</strong><br>${message}</p>`,
    replyTo: email,
  })

  if (error) return res.status(500).json({ error: error.message })
  return res.status(200).json({ success: true })
}
