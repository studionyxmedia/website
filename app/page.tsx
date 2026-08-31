import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorksSection } from '@/components/works-section'
import { AboutServices } from '@/components/about-services'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WorksSection />
        <AboutServices />
      </main>
      <SiteFooter />
    </div>
  )
}
