import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Globe, Diamond, Shield, Star, Mail, Phone, MapPin } from 'lucide-react'
import logoImage from './assets/logo.jpg'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({
    description: '',
    niche: '',
    extension: '',
    maxWords: '',
    maxChars: '',
    domainType: '',
    contactInfo: ''
  })

  const translations = {
    en: {
      title: "ValuaDomain",
      subtitle: "Premium Domain Acquisition and Sales Platform",
      heroTitle: "Acquire Premium Domains for Your Business",
      heroDescription: "We specialize in acquiring valuable domains and helping businesses find the perfect domain name for their projects across multiple niches including law, hospitality, and brandable domains.",
      ctaButton: "Request Custom Domain",
      aboutTitle: "What We Offer",
      aboutDescription: "ValuaDomain focuses on three core messages: High Value, Professionalism & Trust, and Simplicity & Clarity. We help you find premium domains that elevate your brand.",
      servicesTitle: "Our Services",
      service1Title: "Premium Domain Sales",
      service1Description: "Curated collection of high-value domains across various industries",
      service2Title: "Custom Domain Search",
      service2Description: "Personalized domain search based on your specific business needs",
      service3Title: "Domain Consultation",
      service3Description: "Expert advice on domain selection and brand strategy",
      requestTitle: "Request Custom Domain",
      requestDescription: "Tell us about your ideal domain and we'll help you find it",
      descriptionLabel: "Domain Description",
      descriptionPlaceholder: "Describe the domain you're looking for...",
      nicheLabel: "Business Niche",
      nichePlaceholder: "e.g., Law, Hotels, Technology...",
      extensionLabel: "Preferred Extension",
      maxWordsLabel: "Maximum Words",
      maxCharsLabel: "Maximum Characters",
      domainTypeLabel: "Domain Type",
      contactLabel: "Contact Information",
      contactPlaceholder: "Your email or phone number",
      submitButton: "Send Request",
      contactTitle: "Contact Us",
      contactDescription: "Get in touch with our domain experts",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      newDomain: "New Domain",
      oldDomain: "Aged Domain",
      footerText: "© 2024 ValuaDomain. All rights reserved."
    },
    ar: {
      title: "فاليو دومين",
      subtitle: "منصة احترافية لاقتناء وبيع الدومينات المميزة",
      heroTitle: "احصل على دومينات مميزة لمشروعك",
      heroDescription: "نحن متخصصون في اقتناء الدومينات القيمة ومساعدة الشركات في العثور على اسم الدومين المثالي لمشاريعهم عبر مجالات متعددة بما في ذلك القانون والضيافة والدومينات القابلة للعلامة التجارية.",
      ctaButton: "اطلب دومين مخصص",
      aboutTitle: "ما نقدمه",
      aboutDescription: "فاليو دومين يركز على ثلاث رسائل أساسية: القيمة العالية، الاحترافية والثقة، والبساطة والوضوح. نساعدك في العثور على دومينات مميزة ترفع من مستوى علامتك التجارية.",
      servicesTitle: "خدماتنا",
      service1Title: "بيع الدومينات المميزة",
      service1Description: "مجموعة منتقاة من الدومينات عالية القيمة عبر صناعات مختلفة",
      service2Title: "البحث المخصص عن الدومينات",
      service2Description: "بحث شخصي عن الدومينات بناءً على احتياجات عملك المحددة",
      service3Title: "استشارات الدومينات",
      service3Description: "نصائح خبراء حول اختيار الدومين واستراتيجية العلامة التجارية",
      requestTitle: "اطلب دومين مخصص",
      requestDescription: "أخبرنا عن الدومين المثالي لك وسنساعدك في العثور عليه",
      descriptionLabel: "وصف الدومين",
      descriptionPlaceholder: "صف الدومين الذي تبحث عنه...",
      nicheLabel: "مجال العمل",
      nichePlaceholder: "مثال: القانون، الفنادق، التكنولوجيا...",
      extensionLabel: "الامتداد المفضل",
      maxWordsLabel: "الحد الأقصى للكلمات",
      maxCharsLabel: "الحد الأقصى للحروف",
      domainTypeLabel: "نوع الدومين",
      contactLabel: "معلومات الاتصال",
      contactPlaceholder: "بريدك الإلكتروني أو رقم هاتفك",
      submitButton: "إرسال الطلب",
      contactTitle: "اتصل بنا",
      contactDescription: "تواصل مع خبراء الدومينات لدينا",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      addressLabel: "العنوان",
      newDomain: "دومين جديد",
      oldDomain: "دومين قديم",
      footerText: "© 2024 فاليو دومين. جميع الحقوق محفوظة."
    },
    fr: {
      title: "ValuaDomain",
      subtitle: "Plateforme Professionnelle d'Acquisition et de Vente de Domaines Premium",
      heroTitle: "Acquérez des Domaines Premium pour Votre Entreprise",
      heroDescription: "Nous nous spécialisons dans l'acquisition de domaines de valeur et aidons les entreprises à trouver le nom de domaine parfait pour leurs projets dans plusieurs niches, y compris le droit, l'hôtellerie et les domaines de marque.",
      ctaButton: "Demander un Domaine Personnalisé",
      aboutTitle: "Ce Que Nous Offrons",
      aboutDescription: "ValuaDomain se concentre sur trois messages fondamentaux : Haute Valeur, Professionnalisme et Confiance, et Simplicité et Clarté. Nous vous aidons à trouver des domaines premium qui élèvent votre marque.",
      servicesTitle: "Nos Services",
      service1Title: "Vente de Domaines Premium",
      service1Description: "Collection sélectionnée de domaines de haute valeur dans diverses industries",
      service2Title: "Recherche de Domaine Personnalisée",
      service2Description: "Recherche personnalisée de domaines basée sur vos besoins commerciaux spécifiques",
      service3Title: "Consultation de Domaines",
      service3Description: "Conseils d'experts sur la sélection de domaines et la stratégie de marque",
      requestTitle: "Demander un Domaine Personnalisé",
      requestDescription: "Parlez-nous de votre domaine idéal et nous vous aiderons à le trouver",
      descriptionLabel: "Description du Domaine",
      descriptionPlaceholder: "Décrivez le domaine que vous recherchez...",
      nicheLabel: "Niche d'Affaires",
      nichePlaceholder: "ex: Droit, Hôtels, Technologie...",
      extensionLabel: "Extension Préférée",
      maxWordsLabel: "Mots Maximum",
      maxCharsLabel: "Caractères Maximum",
      domainTypeLabel: "Type de Domaine",
      contactLabel: "Informations de Contact",
      contactPlaceholder: "Votre email ou numéro de téléphone",
      submitButton: "Envoyer la Demande",
      contactTitle: "Contactez-Nous",
      contactDescription: "Entrez en contact avec nos experts en domaines",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      newDomain: "Nouveau Domaine",
      oldDomain: "Domaine Ancien",
      footerText: "© 2024 ValuaDomain. Tous droits réservés."
    }
  }

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const emailBody = `
Domain Request Details:
- Description: ${formData.description}
- Business Niche: ${formData.niche}
- Preferred Extension: ${formData.extension}
- Maximum Words: ${formData.maxWords}
- Maximum Characters: ${formData.maxChars}
- Domain Type: ${formData.domainType}
- Contact Information: ${formData.contactInfo}
    `.trim()

    const mailtoLink = `mailto:Ali.elbarbary@valuadomain.com?subject=Custom Domain Request&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className={`min-h-screen font-poppins ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-20 bg-white/90 backdrop-blur-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="ar">AR</SelectItem>
            <SelectItem value="fr">FR</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="mb-8">
            <img 
              src={logoImage} 
              alt="ValuaDomain Logo" 
              className="mx-auto mb-6 w-32 h-32 object-contain rounded-lg shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gold-text">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t.heroTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.heroDescription}
            </p>
          </div>

          <Button 
            size="lg" 
            className="gold-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold px-8 py-4 text-lg"
            onClick={() => document.getElementById('request-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <Diamond className="mr-2 h-5 w-5" />
            {t.ctaButton}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.aboutTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.aboutDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 border-gray-100 hover:border-yellow-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Diamond className="h-12 w-12 gold-text mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800">High Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Premium domains that add significant value to your brand and business presence.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-yellow-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800">Professional & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Reliable service with professional expertise in domain acquisition and sales.</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-gray-100 hover:border-yellow-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800">Simple & Clear</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Straightforward process with clear communication and transparent pricing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.servicesTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <Globe className="h-10 w-10 gold-text mb-4" />
                <CardTitle className="text-xl font-semibold">{t.service1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {t.service1Description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Diamond className="h-10 w-10 gold-text mb-4" />
                <CardTitle className="text-xl font-semibold">{t.service2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {t.service2Description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Shield className="h-10 w-10 gold-text mb-4" />
                <CardTitle className="text-xl font-semibold">{t.service3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {t.service3Description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.requestTitle}</h2>
              <p className="text-xl text-gray-600">{t.requestDescription}</p>
            </div>

            <Card className="shadow-xl border-2 border-gray-100">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="description" className="text-lg font-medium">{t.descriptionLabel}</Label>
                    <Textarea
                      id="description"
                      placeholder={t.descriptionPlaceholder}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="mt-2 min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="niche" className="text-lg font-medium">{t.nicheLabel}</Label>
                      <Input
                        id="niche"
                        placeholder={t.nichePlaceholder}
                        value={formData.niche}
                        onChange={(e) => handleInputChange('niche', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="extension" className="text-lg font-medium">{t.extensionLabel}</Label>
                      <Select value={formData.extension} onValueChange={(value) => handleInputChange('extension', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select extension" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=".com">.com</SelectItem>
                          <SelectItem value=".net">.net</SelectItem>
                          <SelectItem value=".org">.org</SelectItem>
                          <SelectItem value=".io">.io</SelectItem>
                          <SelectItem value=".co">.co</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maxWords" className="text-lg font-medium">{t.maxWordsLabel}</Label>
                      <Input
                        id="maxWords"
                        type="number"
                        placeholder="e.g., 2"
                        value={formData.maxWords}
                        onChange={(e) => handleInputChange('maxWords', e.target.value)}
                        className="mt-2"
                        min="1"
                        max="5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="maxChars" className="text-lg font-medium">{t.maxCharsLabel}</Label>
                      <Input
                        id="maxChars"
                        type="number"
                        placeholder="e.g., 15"
                        value={formData.maxChars}
                        onChange={(e) => handleInputChange('maxChars', e.target.value)}
                        className="mt-2"
                        min="3"
                        max="63"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="domainType" className="text-lg font-medium">{t.domainTypeLabel}</Label>
                    <Select value={formData.domainType} onValueChange={(value) => handleInputChange('domainType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select domain type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">{t.newDomain}</SelectItem>
                        <SelectItem value="aged">{t.oldDomain}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contact" className="text-lg font-medium">{t.contactLabel}</Label>
                    <Input
                      id="contact"
                      placeholder={t.contactPlaceholder}
                      value={formData.contactInfo}
                      onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gold-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold py-3 text-lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {t.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600">{t.contactDescription}</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 gold-text mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.emailLabel}</h3>
                <p className="text-gray-600">Ali.elbarbary@valuadomain.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 gold-text mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.phoneLabel}</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 gold-text mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.addressLabel}</h3>
                <p className="text-gray-600">Global Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img 
              src={logoImage} 
              alt="ValuaDomain Logo" 
              className="mx-auto w-16 h-16 object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold gold-text">{t.title}</h3>
          </div>
          <p className="text-gray-400">{t.footerText}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

