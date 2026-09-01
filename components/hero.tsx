import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt="A lone figure obscured by fog and hard light in a vast dark space"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      {/* tonal scrims for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70"
      />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 pb-16 md:px-10 md:pb-24">
        <p className="mb-8 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          <span className="text-foreground">Photography, visual production &amp; creative strategy.</span>{' '}
          A boutique studio working in shadow, restraint, and the space between frames.
        </p>

        <h1 className="font-serif text-[18vw] leading-[0.82] tracking-tight text-foreground md:text-[13vw] lg:text-[120px]">
          Studio Nyx Media
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Est. — images made after dark
          </p>
          <Link
            href="#works"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground"
          >
            <span className="opacity-70 transition-opacity group-hover:opacity-100">
              Selected Works
            </span>
            <span
              aria-hidden
              className="inline-block h-px w-10 bg-foreground transition-all duration-300 group-hover:w-16"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
