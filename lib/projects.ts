export type ProcessStep = {
  phase: string
  title: string
  body: string
}

export type Project = {
  slug: string
  index: string
  title: string
  category: string
  client: string
  year: string
  cover: string
  summary: string
  brief: string
  process: ProcessStep[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'relivingChanel1992',
    index: '01',
    title: 'Reliving Chanel 1992',
    category: 'Fashion Editorial',
    client: 'Anthology of Style',
    year: '2025',
    cover: '/images/work-chanel1992-1.png',
    summary:
      'An editorial series exploring historical fashion for a luxury secondhand retail house.',
    brief:
      'A visual study and print production documenting Anthology of Style’s collection of archival 1992 Chanel. Studio Nyx Media executed full creative production: location scouting, talent casting, photography, post-production, and print catalog book design.',
    process: [
      {
        phase: 'Direction',
        title: 'Direction',
        body: 'Reviewing historical 1992 Chanel runway archives and catalog references alongside Anthology of Style to establish visual direction and wardrobe styling decisions.',
      },
      {
        phase: 'Production',
        title: 'Production',
        body: 'Casting models and identifying locations across New York City. Managing full-day wardrobe prep, hair and makeup, model direction, and photography.',
      },
      {
        phase: 'Post',
        title: 'Post',
        body: 'Editing and color work, retouching, and image sequencing for final images. Layout design for a printed hardcover book documenting the entire curation.',
      },
    ],
    gallery: ['/images/work-chanel1992-1.png', '/images/gallery-1.png', '/images/gallery-2.png'],
  },
  {
    slug: 'concrete-bloom',
    index: '02',
    title: 'Concrete Bloom',
    category: 'Architecture',
    client: 'Halden Assembly',
    year: '2025',
    cover: '/images/work-concrete.png',
    summary:
      'A study of brutalist form and raking daylight for an architecture collective monograph.',
    brief:
      'Halden Assembly needed imagery for a printed monograph that treated their concrete work as sculpture rather than real estate. The ask: remove the human, remove the sky, let geometry and shadow carry the story.',
    process: [
      {
        phase: 'Direction',
        title: 'Chasing the shadow line',
        body: 'We mapped the sun across the building for a full day to find the two hours where the shadows cut hardest across the raw surfaces.',
      },
      {
        phase: 'Production',
        title: 'Large-format discipline',
        body: 'Every frame was composed on a tripod with perspective correction — no crop in post, no forgiveness in the field.',
      },
      {
        phase: 'Post',
        title: 'Tonal architecture',
        body: 'Monochrome conversion tuned per-surface so concrete reads as a material, not a gray. The grain was matched to the print stock.',
      },
    ],
    gallery: ['/images/work-concrete.png', '/images/gallery-3.png', '/images/gallery-2.png'],
  },
  {
    slug: 'silent-frequencies',
    index: '03',
    title: 'Silent Frequencies',
    category: 'Portraiture',
    client: 'Ø Records',
    year: '2024',
    cover: '/images/work-frequencies.png',
    summary:
      'Intimate low-key portraits for the debut record of an ambient composer.',
    brief:
      'Ø Records asked for a portrait series that felt like the music — quiet, internal, emerging slowly from silence. The ask: no smiles, no eye contact for the camera, just presence pulled out of the dark.',
    process: [
      {
        phase: 'Direction',
        title: 'Listening first',
        body: 'We scored the shoot to the unreleased album, letting the tempo of the session follow the tempo of the record.',
      },
      {
        phase: 'Production',
        title: 'A conversation, not a shoot',
        body: 'Two hours, one lens, and long silences. The strongest frames came in the gaps between direction.',
      },
      {
        phase: 'Post',
        title: 'Holding the shadow',
        body: 'We resisted the urge to lift the blacks. The face stays half-hidden — the way the music intends it.',
      },
    ],
    gallery: ['/images/work-frequencies.png', '/images/gallery-1.png', '/images/gallery-3.png'],
  },
  {
    slug: 'vapor',
    index: '04',
    title: 'Vapor',
    category: 'Product / Beauty',
    client: 'Aesop-adjacent',
    year: '2024',
    cover: '/images/work-vapor.png',
    summary:
      'Sculptural still life and vapor studies for a minimalist fragrance launch.',
    brief:
      'A fragrance house launching a single unisex scent wanted product imagery that never showed the product plainly. The ask: suggest the scent through smoke, glass, and reflection — sell the feeling, not the bottle.',
    process: [
      {
        phase: 'Direction',
        title: 'Photographing the invisible',
        body: 'We treated vapor as the hero and the vessel as the supporting act, backlighting mist to give the scent a physical body.',
      },
      {
        phase: 'Production',
        title: 'Controlled chaos',
        body: 'Hundreds of frames of drifting smoke captured at high shutter speeds to find the three that felt inevitable.',
      },
      {
        phase: 'Post',
        title: 'Glossary of grays',
        body: 'A tight tonal range keeps the glass luminous against near-black, with just enough grain to avoid the clinical.',
      },
    ],
    gallery: ['/images/work-vapor.png', '/images/gallery-3.png', '/images/gallery-1.png'],
  },
  {
    slug: 'monolith',
    index: '05',
    title: 'Monolith',
    category: 'Brand Campaign',
    client: 'Terrane',
    year: '2023',
    cover: '/images/work-monolith.png',
    summary:
      'A conceptual campaign placing a single object in vast, foggy negative space.',
    brief:
      'Terrane, a materials company, wanted a brand campaign with the gravity of a landmark. The ask: one object, one landscape, total quiet — an image that could hold an entire billboard with a single form.',
    process: [
      {
        phase: 'Direction',
        title: 'The power of one',
        body: 'We stripped the campaign to a single monolithic subject in fog, trusting negative space to do the persuading.',
      },
      {
        phase: 'Production',
        title: 'Weather as collaborator',
        body: 'We waited three mornings for the right fog density, then worked fast in the twenty-minute window it gave us.',
      },
      {
        phase: 'Post',
        title: 'Atmosphere, refined',
        body: 'Careful dodge-and-burn shaped the haze so the eye lands exactly where the brand wants it — and nowhere else.',
      },
    ],
    gallery: ['/images/work-monolith.png', '/images/gallery-2.png', '/images/gallery-3.png'],
  },
  {
    slug: 'afterglow',
    index: '06',
    title: 'Afterglow',
    category: 'Motion / Film',
    client: 'Nocturne Festival',
    year: '2023',
    cover: '/images/work-afterglow.png',
    summary:
      'Motion-led key art and film stills for a late-night electronic festival.',
    brief:
      'Nocturne Festival needed key art that captured the blur of a night that runs together. The ask: movement, light trails, and the feeling of a body dissolving into sound and dark.',
    process: [
      {
        phase: 'Direction',
        title: 'Embracing the blur',
        body: 'We designed around long exposures and dragged shutter, letting imperfection carry the energy of the room.',
      },
      {
        phase: 'Production',
        title: 'Shot in the crowd',
        body: 'Captured live across two nights of the festival — no staging, only response to the light and the movement as it happened.',
      },
      {
        phase: 'Post',
        title: 'Cutting for rhythm',
        body: 'Stills were sequenced like a set: builds, drops, and quiet moments, so the key art moves even when it holds still.',
      },
    ],
    gallery: ['/images/work-afterglow.png', '/images/gallery-2.png', '/images/gallery-1.png'],
  },
]

export const services = [
  {
    title: 'Photography',
    body: 'Editorial, portrait, product, and architectural photography with a deliberate, low-key sensibility.',
  },
  {
    title: 'Visual Production',
    body: 'End-to-end production — casting, location, direction, and post — kept small, senior, and hands-on.',
  },
  {
    title: 'Creative Strategy',
    body: 'Brand and campaign strategy that decides what to leave out, then builds the image system around it.',
  },
]
