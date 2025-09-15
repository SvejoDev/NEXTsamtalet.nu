import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { ConversationSection } from "@/components/conversation-section"
import { ImportantInfoSection } from "@/components/important-info-section"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <ConversationSection />
      <ImportantInfoSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
