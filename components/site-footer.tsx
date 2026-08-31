import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[110rem] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link
            href="#top"
            className="font-serif text-5xl leading-none tracking-tight text-foreground md:text-7xl"
          >
            Studio Nyx
          </Link>
          <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-3 md:text-right">
            <div className="flex flex-col gap-2">
              <span className="text-foreground/50">Index</span>
              <Link href="#works" className="transition-colors hover:text-foreground">
                Works
              </Link>
              <Link href="#studio" className="transition-colors hover:text-foreground">
                Studio
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-foreground/50">Social</span>
              <a href="#" className="transition-colors hover:text-foreground">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Behance
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-foreground/50">Studio</span>
              <span>Working worldwide</span>
              <span>After dark</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Studio Nyx Media</span>
          <span>Images made after dark</span>
        </div>
      </div>
    </footer>
  )
}
