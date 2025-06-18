import Link from "next/link"
import { ArrowRight, Mail, Lock, Eye, CheckCircle, Zap, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Logo } from "@/components/logo"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/trial" className="text-green-600 hover:text-green-700 font-medium">
              Start free trial
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Visual Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Welkom terug bij Nextgen</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ga door met het optimaliseren van je logistieke operaties met AI-gestuurde inzichten en deskundige
                aanbevelingen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-gestuurde beoordelingen</h3>
                  <p className="text-gray-600">
                    Krijg direct logistieke diagnoses en persoonlijke aanbevelingen voor jouw bedrijf.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deskundige ondersteuning</h3>
                  <p className="text-gray-600">
                    Krijg toegang tot menselijke logistiek specialisten en word lid van onze community van Nederlandse
                    MKB-leiders.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Veilig & Compliant</h3>
                  <p className="text-gray-600">
                    Jouw data is beschermd met enterprise-grade beveiliging en volledige GDPR-compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jan de Vries</div>
                  <div className="text-sm text-gray-600">Operations Manager, TechFlow B.V.</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Nextgen helped us reduce our logistics costs by 23% in just 3 months. The AI recommendations were
                spot-on and easy to implement."
              </p>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">Inloggen op je account</CardTitle>
                <CardDescription>Vul je gegevens in om toegang te krijgen tot je dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email adres</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Vul je email in"
                        className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Wachtwoord</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Vul je wachtwoord in"
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                      <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Onthoud mij
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                      Wachtwoord vergeten?
                    </Link>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-base" size="lg">
                    Inloggen op Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Of ga verder met</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full h-12">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full h-12">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-6 text-sm text-gray-600">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-green-600 hover:text-green-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-green-600 hover:text-green-700">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
