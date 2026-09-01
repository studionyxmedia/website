'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/projects'
import { ProjectDetail } from '@/components/project-detail'

export function WorksSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="works" className="scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between border-b border-border pb-6 md:mb-16">
          <h2 className="font-serif text-4xl leading-none tracking-tight text-foreground md:text-6xl">
            Selected Works
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:block">
            {projects.length} projects
          </span>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-24">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              className={i % 3 === 0 ? 'md:col-span-2' : ''}
            >
              <button
                onClick={() => setActive(project)}
                className="group block w-full text-left"
                aria-label={`Open ${project.title} — ${project.category}`}
              >
                <div
                  className={`grain relative w-full overflow-hidden ${
                    i % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5] md:aspect-[3/4]'
                  }`}
                >
                  <Image
                    src={project.cover || '/placeholder.svg'}
                    alt={`${project.title} — ${project.category} for ${project.client}`}
                    fill
                    sizes={i % 3 === 0 ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
                    className="object-cover grayscale transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-background/10 transition-colors duration-500 group-hover:bg-background/0"
                  />
                  <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center border border-white/30 bg-background/30 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {project.index}
                    </span>
                    <h3 className="font-serif text-2xl leading-none tracking-tight text-foreground transition-opacity group-hover:opacity-70 md:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {project.category}
                    <span className="mx-2 opacity-40">/</span>
                    {project.client}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <ProjectDetail project={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
