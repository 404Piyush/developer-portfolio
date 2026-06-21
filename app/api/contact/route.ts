import { NextResponse } from "next/server"

export const runtime = "edge"

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  projectType?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_API_KEY

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Contact form is not configured. Use the mailto link instead." },
      { status: 503 }
    )
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null

  const name = body?.name?.trim() ?? ""
  const email = body?.email?.trim() ?? ""
  const company = body?.company?.trim() ?? ""
  const projectType = body?.projectType?.trim() ?? "General inquiry"
  const message = body?.message?.trim() ?? ""

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Please fill in your name, email, and project details." },
      { status: 400 }
    )
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    )
  }

  const formData = new FormData()
  formData.append("access_key", accessKey)
  formData.append("subject", `Portfolio inquiry • ${projectType}`)
  formData.append("name", name)
  formData.append("email", email)
  formData.append("message", [`Project type: ${projectType}`, `Company: ${company || "-"}`, "", message].join("\n"))

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    const data = (await response.json()) as { success?: boolean; message?: string }
    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, message: data.message ?? "Submission failed." },
        { status: 502 }
      )
    }
    return NextResponse.json({ success: true, message: "Message sent successfully." })
  } catch {
    return NextResponse.json(
      { success: false, message: "Network error. Please email directly." },
      { status: 500 }
    )
  }
}