import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Environment variable check
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          error: "Server email configuration is missing.",
        },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Heemab AI Solutions <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Portfolio Enquiry - ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px">

        <h2 style="color:#2563eb;">
          New Portfolio Enquiry
        </h2>

        <table style="width:100%;border-collapse:collapse">

          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company || "Not provided"}</td>
          </tr>

          <tr>
            <td><strong>Project Type</strong></td>
            <td>${projectType || "Not specified"}</td>
          </tr>

          <tr>
            <td><strong>Budget</strong></td>
            <td>${budget || "Not specified"}</td>
          </tr>

          <tr>
            <td><strong>Timeline</strong></td>
            <td>${timeline || "Not specified"}</td>
          </tr>

        </table>

        <hr style="margin:25px 0"/>

        <h3>Project Details</h3>

        <p style="line-height:1.8">
          ${message}
        </p>

      </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}