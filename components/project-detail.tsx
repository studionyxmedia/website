'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { Project } from '@/lib/projects'

type ProjectDetailProps = {
  project: Project
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project detail`}
      className="fixed inset-0 z-50 overflow-y-auto bg-background"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-6 py-5 backdrop-blur md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {project.index} — {project.category}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground"
        >
          Close
          <X className="size-4 transition-transform group-hover:rotate-90" strokeWidth={1.5} />
        </button>
      </div>

      {/* Full-bleed lead image */}
      <div className="grain relative h-[62svh] w-full overflow-hidden md:h-[78svh]">
        <Image
          src={project.cover}
          alt={`${project.title} — lead image`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[110rem] px-6 pb-10 md:px-10 md:pb-14">
          <h2 className="font-serif text-6xl leading-none tracking-tight text-foreground md:text-8xl">
            {project.title}
          </h2>
        </div>
      </div>

      {/* Meta + summary */}
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 border-b border-border py-12 md:grid-cols-12 md:py-16">
          <dl className="grid grid-cols-2 gap-6 md:col-span-4 md:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Client</dt>
              <dd className="mt-2 text-base text-foreground">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Discipline</dt>
              <dd className="mt-2 text-base text-foreground">{project.category}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Year</dt>
              <dd className="mt-2 text-base text-foreground">{project.year}</dd>
            </div>
          </dl>
          <p className="font-serif text-2xl leading-snug text-pretty text-foreground md:col-span-8 md:text-4xl">
            {project.summary}
          </p>
        </div>

        {/* Client brief / ask */}
        <section className="grid grid-cols-1 gap-8 border-b border-border py-12 md:grid-cols-12 md:py-16">
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-4">
            The Brief
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-foreground/90 md:col-span-8">
            {project.brief}
          </p>
        </section>

        {/* Creative process breakdown */}
        <section className="border-b border-border py-12 md:py-16">
          <h3 className="mb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Creative Process
          </h3>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {project.process.map((step) => (
              <article key={step.phase} className="bg-background p-8 md:p-10">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {step.phase}
                </span>
                <h4 className="mt-6 font-serif text-2xl leading-tight text-foreground md:text-3xl">
                  {step.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Final image gallery */}
        <section className="py-12 md:py-16">
          <h3 className="mb-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Gallery
          </h3>
          <div className="flex flex-col gap-4 md:gap-6">
            {project.gallery.map((src, i) => (
              <div
                key={src + i}
                className={`grain relative w-full overflow-hidden ${
                  i % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3] md:aspect-[16/9]'
                }`}
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`${project.title} — gallery frame ${i + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-border py-10">
          <span className="font-serif text-xl text-foreground">{project.title}</span>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to works
          </button>
        </div>
      </div>
    </div>
  )
}
