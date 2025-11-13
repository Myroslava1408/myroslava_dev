import { HeaderComponent } from '@/core/components/header'
import { FooterComponent } from '@/core/components/footer'
import { HeroComponent } from '@/core/components/hero'
import { SkillsComponent } from '@/core/components/skills'
import { ExperienceComponent } from '@/core/components/experience'
import { WorkFlowComponent } from '@/core/components/workflow'
import ContactComponent from '@/core/components/contact/contact.component'

export default function Home() {
  return (
    <div className='text-dark font-sans'>
      <HeaderComponent />
      <main className="mx-auto max-w-6xl bg-[url('/img/bg.png')] bg-contain bg-top bg-no-repeat px-6 py-10">
        <HeroComponent />
        <SkillsComponent />
        <ExperienceComponent />
        <WorkFlowComponent />
        <ContactComponent />
      </main>

      <FooterComponent />
    </div>
  )
}
