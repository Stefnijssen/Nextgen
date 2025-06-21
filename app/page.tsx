import { ArrowRight, CheckCircle, Zap, Target, BarChart3, Shield, FileText, MessageSquare, Search } from "lucide-react"
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
            <Link href="#wat-je-ontvangt" className="text-gray-600 hover:text-gray-900 transition-colors">
              Wat je ontvangt
            </Link>
            <Link href="#waarom-input" className="text-gray-600 hover:text-gray-900 transition-colors">
              Waarom meedoen
            </Link>
            <Link href="#inschrijven" className="text-gray-600 hover:text-gray-900 transition-colors">
              Inschrijven
            </Link>
            <a href="https://tally.so/r/mD9bjE" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 ml-4">Meld je aan</Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">🚀 Gratis AI-Pilot</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Doe gratis mee aan onze <span className="text-green-600">logistieke AI-pilot</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ontvang vrijblijvend advies op maat en denk mee met de ontwikkeling van hét AI-platform voor e-commerce
            logistiek. Speciaal voor Nederlandse MKB'ers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://tally.so/r/mD9bjE" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Meld je aan voor een validatiegesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://tally.so/r/npX5l8" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Doe een Quick Scan
                <Search className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✓ Volledig gratis ✓ Geen verplichtingen ✓ Direct bruikbaar advies
          </p>
        </div>
      </section>

      {/* Waarom we jouw input zoeken */}
      <section id="waarom-input" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-4xl mb-4 block">🧪</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Waarom we jouw input zoeken</h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                We bouwen een slim AI-platform specifiek voor e-commerce logistiek
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Het probleem dat we oplossen:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Logistiek advies is te duur voor het MKB
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Generieke oplossingen passen niet bij jouw situatie
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Voorraadbeheer, retourlogistiek en duurzaamheid blijven uitdagingen
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Onze aanpak:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      AI-gedreven micro-consulting op maat
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Betaalbaar voor bedrijven van 9-49 FTE
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Direct toepasbare adviezen binnen 24 uur
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Waarom jouw feedback waardevol is:</h4>
                <p className="text-gray-700">
                  Door deel te nemen aan onze pilot help je ons het platform te verfijnen zodat het perfect aansluit bij
                  de echte uitdagingen van Nederlandse e-commerce bedrijven. In ruil daarvoor ontvang je gratis advies
                  en krijg je als eerste toegang tot onze tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat je ontvangt */}
      <section id="wat-je-ontvangt" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wat je ontvangt als pilotdeelnemer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Volledig gratis en zonder verplichtingen. We investeren in jouw succes om ons platform te verbeteren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Gratis Quick Scan (5 min)</CardTitle>
                <CardDescription className="text-lg">Korte intake over jouw logistieke uitdagingen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Gestructureerde vragenlijst over je logistiek</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Focus op voorraadbeheer, retourlogistiek & duurzaamheid</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Duurt slechts 5 minuten van je tijd</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Persoonlijk Adviesrapport</CardTitle>
                <CardDescription className="text-lg">Op maat gemaakt rapport binnen 24 uur</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Analyse van jouw specifieke situatie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>3-5 concrete, toepasbare aanbevelingen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Prioritering en implementatie-tips</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Expert Sparring (30 min)</CardTitle>
                <CardDescription className="text-lg">Persoonlijk gesprek met logistiek specialist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Doorspreken van je adviesrapport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Beantwoorden van specifieke vragen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Praktische implementatie-ondersteuning</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Pilotklant Optie</CardTitle>
                <CardDescription className="text-lg">Meedenken en mee-ontwikkelen</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span>Vroege toegang tot ons AI-platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span>Invloed op functionaliteit en features</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  <span>Speciale pilotklant voorwaarden</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Segments - aangepast voor e-commerce focus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect voor e-commerce bedrijven die worstelen met logistiek
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herken je jezelf in één van deze uitdagingen? Dan is onze pilot perfect voor jou.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Voorraadbeheer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Te veel of te weinig voorraad? Moeilijk om de juiste balans te vinden tussen kosten en
                  beschikbaarheid?
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <ArrowRight className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Retourlogistiek</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Retouren kosten te veel tijd en geld? Geen duidelijk proces voor het afhandelen van terugzendingen?
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Last-mile Bezorging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hoge bezorgkosten? Klanten ontevreden over levertijden? Zoek je betere bezorgoplossingen?
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Duurzaamheid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Wil je duurzamer worden maar weet je niet waar te beginnen? Klanten vragen om groene oplossingen?
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inschrijfformulier sectie */}
      <section id="inschrijven" className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Klaar om mee te doen aan onze AI-pilot?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Meld je aan voor de gratis quick scan en ontvang binnen 24 uur je persoonlijke adviesrapport. Volledig
            vrijblijvend en zonder kosten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="https://tally.so/r/mD9bjE" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-12 py-3">
                Meld je aan voor een validatiegesprek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://tally.so/r/npX5l8" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-12 py-3"
              >
                Doe een Quick Scan
                <Search className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-green-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>5 minuten van je tijd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Adviesrapport binnen 24u</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Geen verplichtingen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo variant="white" className="mb-4" />
              <p className="text-gray-400">
                AI-gedreven logistiek consulting platform voor Nederlandse e-commerce bedrijven.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pilot Programma</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#wat-je-ontvangt" className="hover:text-white transition-colors">
                    Wat je ontvangt
                  </Link>
                </li>
                <li>
                  <Link href="#waarom-input" className="hover:text-white transition-colors">
                    Waarom meedoen
                  </Link>
                </li>
                <li>
                  <Link href="/trial" className="hover:text-white transition-colors">
                    Inschrijven
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ondersteuning</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Veelgestelde vragen
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
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Voor vragen over de pilot:</li>
                <li>
                  <a href="mailto:pilot@nextgen-logistics.nl" className="hover:text-white transition-colors">
                    pilot@nextgen-logistics.nl
                  </a>
                </li>
                <li>
                  <a href="tel:+31612345678" className="hover:text-white transition-colors">
                    +31 6 1234 5678
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nextgen. Alle rechten voorbehouden. | Pilot Programma - Gratis deelname</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
