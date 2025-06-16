"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Building, User, Mail, Phone, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/logo"
import { submitSignupForm } from "@/app/actions/signup"

type FormData = {
  company: string
  firstName: string
  lastName: string
  email: string
  phone: string
  terms: boolean
}

type FormErrors = {
  company?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  terms?: string
}

export default function SignUpPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    terms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Allow empty phone (since it's optional) or validate format
    if (!phone) return true
    // Simple validation for international phone numbers
    const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/
    return re.test(phone)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched({
      ...touched,
      [name]: true,
    })

    // Validate the field on blur
    const newErrors: FormErrors = { ...errors }

    if (name === "company" && !formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (name === "firstName" && !formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (name === "lastName" && !formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (name === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }

    if (name === "phone" && formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true
        return acc
      },
      {} as Record<string, boolean>,
    )

    setTouched(allTouched)

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        // Submit form data to server action
        const result = await submitSignupForm(formData)

        if (result.success) {
          setFormSubmitted(true)
        } else {
          // Handle validation errors from server
          if (result.errors) {
            const serverErrors: FormErrors = {}
            Object.entries(result.errors).forEach(([key, value]) => {
              if (Array.isArray(value) && value.length > 0) {
                serverErrors[key as keyof FormErrors] = value[0]
              }
            })
            setErrors(serverErrors)
          } else {
            // Handle general server error
            setServerError(result.message || "Something went wrong. Please try again.")
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        setServerError("Failed to submit form. Please try again later.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="text-sm text-gray-600">
            <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
              Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-100 text-green-700 border-green-200 text-sm px-4 py-2">🚀 Get Started</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sign up for information about <span className="text-green-600">AI-Powered</span> Logistics Consulting
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          {!formSubmitted ? (
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold">Your Information</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below to receive information about our services
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {serverError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base font-medium">
                      Company name *
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your company name"
                        className={`pl-12 h-12 text-base ${
                          errors.company && touched.company
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                        }`}
                        required
                      />
                    </div>
                    {errors.company && touched.company && (
                      <div className="flex items-center mt-1 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.company}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base font-medium">
                        First name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="First name"
                          className={`pl-12 h-12 text-base ${
                            errors.firstName && touched.firstName
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                          }`}
                          required
                        />
                      </div>
                      {errors.firstName && touched.firstName && (
                        <div className="flex items-center mt-1 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base font-medium">
                        Last name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Last name"
                        className={`h-12 text-base ${
                          errors.lastName && touched.lastName
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                        }`}
                        required
                      />
                      {errors.lastName && touched.lastName && (
                        <div className="flex items-center mt-1 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Work email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your work email"
                        className={`pl-12 h-12 text-base ${
                          errors.email && touched.email
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                        }`}
                        required
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div className="flex items-center mt-1 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+31 6 12345678"
                        className={`pl-12 h-12 text-base ${
                          errors.phone && touched.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-green-500 focus:ring-green-500"
                        }`}
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <div className="flex items-center mt-1 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => {
                          setFormData({
                            ...formData,
                            terms: checked === true,
                          })
                          if (checked) {
                            setErrors({
                              ...errors,
                              terms: undefined,
                            })
                          }
                        }}
                        className={errors.terms && touched.terms ? "border-red-500" : ""}
                      />
                      <div>
                        <Label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the{" "}
                          <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-green-600 hover:text-green-700 font-medium">
                            Privacy Policy
                          </Link>
                        </Label>
                        {errors.terms && touched.terms && (
                          <div className="flex items-center mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.terms}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 h-12 text-base font-medium"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
                <CardDescription className="text-lg">Your information has been submitted successfully</CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-6">
                  We've received your request for information about our AI-powered logistics consulting services. Our
                  team will be in touch with you shortly.
                </p>
                <Link href="/">
                  <Button className="bg-green-600 hover:bg-green-700">Return to Homepage</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
