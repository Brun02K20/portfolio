// pages/api/contact.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend("re_4wyxRhT5_GrqEjuU1HVNCG8PdaeMAGWat")

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['bvirinni@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ success: false }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Server error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}