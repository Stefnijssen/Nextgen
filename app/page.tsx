import { ArrowRight, CheckCircle, Users, Zap, Target, BarChart3, Shield, Clock, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/logo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Functies
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Prijzen
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              Over ons
            </Link>
            <Link href="/trial">
              <Button className="bg-green-600 hover:bg-green-700 ml-4">Word pilotbedrijf</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">AI-Gedreven Logistiek Consulting</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformeer je logistiek met <span className="text-green-600">AI-gedreven</span> expertise
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Krijg betaalbare, toegankelijke logistiek consulting voor Nederlandse MKB. Ons AI-platform levert expert
            aanbevelingen voor 20-30% van traditionele consulting tarieven.
          </p>
          <div className="flex justify-center">
            <Link href="/trial">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Help ons testen – doe mee aan ons validatiegesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gebouwd voor Nederlandse MKB met logistieke uitdagingen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ons platform richt zich specifiek op de unieke behoeften van kleine en middelgrote bedrijven in Nederland
              binnen belangrijke logistieke segmenten.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">E-commerce Logistiek</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimaliseer orderafhandeling, retourenbeheer en last-mile bezorging voor kleine retailers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Supply Chain Digitaal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Begeleid productie MKB door digitale transformatie en systeemimplementatie.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Voorraad Optimalisatie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Balanceer werkkapitaal efficiëntie met productbeschikbaarheid voor groothandel & distributie.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Duurzaamheid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Implementeer praktische duurzaamheidsroadmaps voor export-gerichte MKB.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alles wat je nodig hebt om je logistiek te optimaliseren
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ons uitgebreide platform combineert AI-gedreven inzichten met menselijke expertise om bruikbare logistieke
              oplossingen te leveren.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-gedreven Assessment</h3>
                  <p className="text-gray-600">
                    Branche-specifieke diagnostische tools die logistieke knelpunten en kansen identificeren met
                    geautomatiseerde data-analyse.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gepersonaliseerde Aanbevelingen</h3>
                  <p className="text-gray-600">
                    Maatwerk roadmaps en oplossingen afgestemd op jouw bedrijfsgrootte, branche en specifieke
                    uitdagingen.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kennisbank & Bronnen</h3>
                  <p className="text-gray-600">
                    Uitgebreide bibliotheek van best practices, technologie reviews, case studies en
                    implementatiegidsen.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Begeleiding</h3>
                  <p className="text-gray-600">
                    Menselijke logistiek specialisten beoordelen AI-aanbevelingen en bieden virtuele spreekuur
                    ondersteuning.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Voortgang Tracking</h3>
                  <p className="text-gray-600">
                    Monitor implementatie mijlpalen, volg KPI verbeteringen en ontvang continue verfijningen.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community & Netwerken</h3>
                  <p className="text-gray-600">
                    Verbind met collega's, doe mee aan expert webinars en krijg toegang tot een gecureerde partner
                    directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Betaalbare plannen voor elke bedrijfsgrootte</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Krijg expert logistiek consulting voor een fractie van traditionele consulting kosten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€49</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <CardDescription className="mt-2">Perfect voor microbedrijven (1-9 medewerkers)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Basis assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Beperkte aanbevelingen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Kennisbank toegang</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Community forum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Email ondersteuning</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Word pilotbedrijf
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-300 relative hover:border-green-400 transition-colors">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Meest Populair</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Groei</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€149</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <CardDescription className="mt-2">Ideaal voor kleine bedrijven (10-49 medewerkers)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Uitgebreide assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Volledige aanbevelingen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Implementatiegidsen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Beperkte expert spreekuren</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Tot 3 gebruikers</span>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Word pilotbedrijf</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Schaal</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">€349</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <CardDescription className="mt-2">
                  Gebouwd voor middelgrote bedrijven (50-249 medewerkers)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Geavanceerde assessments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Maatwerk roadmaps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>ROI calculators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Reguliere expert spreekuren</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Tot 10 gebruikers</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Word pilotbedrijf
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Iets anders nodig?{" "}
              <Link href="#" className="text-green-600 hover:underline">
                Neem contact op voor Enterprise prijzen
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* New Validation Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-4xl mb-4 block">🧪</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Waarom we jouw input zoeken</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Help ons bouwen aan hét AI-platform voor logistiek MKB
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We bouwen een AI-gedreven micro-consulting platform speciaal voor bedrijven zoals dat van jou. Wil jij
                als één van de eersten meedenken en gratis advies ontvangen?
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-6 text-left">
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">30-min call met Stef</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Persoonlijk gesprek over jouw logistieke uitdagingen en hoe ons platform kan helpen.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 text-left">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Validatievragenlijst</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Vul onze korte vragenlijst in en ontvang direct eerste inzichten.
                  </p>
                </div>
              </div>

              <Link href="/trial">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-12 py-3">
                  Doe mee aan validatie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Klaar om je logistiek te transformeren?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij Nederlandse MKB bedrijven die hun logistiek al optimaliseren met AI-gedreven inzichten.
            Start vandaag nog met je gratis assessment.
          </p>
          <div className="flex justify-center">
            <Link href="/trial">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-12 py-3">
                Word pilotbedrijf (30 min call)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo variant="white" className="mb-4" />
              <p className="text-gray-400">AI-gedreven logistiek consulting platform voor Nederlandse MKB.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Functies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Prijzen
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integraties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bronnen</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentatie
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ondersteuning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Bedrijf</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Over ons
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nextgen. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
