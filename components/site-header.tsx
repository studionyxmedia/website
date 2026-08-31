import Link from 'next/link'

const nav = [
  { label: 'Works', href: '#works' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className="font-serif text-lg leading-none tracking-tight text-white md:text-xl"
        >
          Studio Nyx
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-white md:gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
