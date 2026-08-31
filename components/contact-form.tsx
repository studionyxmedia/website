'use client'

import { useState } from 'react'

type Status = 'idle' | 'sent'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend wired — acknowledge locally.
    setStatus('sent')
  }

  const fieldClass =
    'w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-0'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@studio.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="project"
          className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          The project
        </label>
        <textarea
          id="project"
          name="project"
          rows={3}
          required
          placeholder="Tell us what you're making."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 self-start text-xs uppercase tracking-[0.25em] text-foreground"
        >
          <span>{status === 'sent' ? 'Message received' : 'Send enquiry'}</span>
          <span
            aria-hidden
            className="inline-block h-px w-10 bg-foreground transition-all duration-300 group-hover:w-16"
          />
        </button>
        {status === 'sent' && (
          <p role="status" className="text-xs text-muted-foreground">
            Thank you — we&apos;ll be in touch shortly.
          </p>
        )}
      </div>
    </form>
  )
}
