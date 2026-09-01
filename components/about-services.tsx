import { services } from '@/lib/projects'
import { ContactForm } from '@/components/contact-form'

const EMAIL = 'contact@studionyxmedia.com'

export function AboutServices() {
  return (
    <>
      {/* About + Services */}
      <section id="studio" className="scroll-mt-20 border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                (About)
              </span>
            </div>
            <div className="md:col-span-10">
              <p className="max-w-4xl text-balance font-serif text-3xl leading-[1.15] text-foreground md:text-5xl md:leading-[1.1]">
                Studio Nyx Media is a small, senior studio making images after dark — deliberate,
                monochrome, and unafraid of silence. We work with brands and artists who believe
                restraint is a form of confidence.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:mt-24 md:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <h2 className="font-serif text-4xl leading-none tracking-tight text-foreground md:text-6xl">
                Let&apos;s make something.
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Commissions, collaborations, and considered enquiries only. Prefer emailing directly?
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-4 inline-flex items-center gap-3 text-base text-foreground"
              >
                <span className="border-b border-border pb-1 transition-colors group-hover:border-foreground">
                  {EMAIL}
                </span>
              </a>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
