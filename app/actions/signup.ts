"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define validation schema
const signupSchema = z.object({
  company: z.string().min(1, { message: "Company name is required" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
})

type SignupFormData = z.infer<typeof signupSchema>

export async function submitSignupForm(formData: SignupFormData) {
  try {
    // Validate form data
    const validatedData = signupSchema.parse(formData)

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "your-password",
      },
    })

    // Format the email content
    const emailContent = `
      New Sign-up Information:
      
      Company: ${validatedData.company}
      Name: ${validatedData.firstName} ${validatedData.lastName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone || "Not provided"}
      
      This information was submitted from your Nextgen website.
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@nextgen.com",
      to: process.env.EMAIL_TO || "s.nijssen@nextgen-logistics.nl",
      subject: "New Sign-up from Nextgen Website",
      text: emailContent,
    })

    // Store in database (optional - you can implement this later)
    // await prisma.lead.create({
    //   data: {
    //     company: validatedData.company,
    //     firstName: validatedData.firstName,
    //     lastName: validatedData.lastName,
    //     email: validatedData.email,
    //     phone: validatedData.phone || '',
    //   },
    // })

    return { success: true, message: "Form submitted successfully" }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      // Return validation errors
      const fieldErrors = error.flatten().fieldErrors
      return {
        success: false,
        message: "Validation failed",
        errors: fieldErrors,
      }
    }

    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    }
  }
}
