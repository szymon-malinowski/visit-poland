import { ActionLink } from '../atoms/ActionLink'
import { Eyebrow } from '../atoms/Eyebrow'

export function HeroSection() {
  return (
    <section className="hero relative min-h-168 overflow-hidden bg-base-300">
      <img
        className="absolute inset-0 size-full object-cover object-center"
        src="/images/warsaw-hero.png"
        alt=""
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/20"
        aria-hidden="true"
      />

      <div className="hero-content relative z-10 w-full max-w-6xl justify-start px-5 py-20">
        <div className="max-w-2xl text-white">
          <Eyebrow>Your next journey starts here</Eyebrow>
          <h1 className="font-serif text-5xl leading-none font-medium tracking-tight text-white sm:text-6xl lg:text-8xl">
            Fall in love with Poland
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Wander through historic cities, wild mountains, and the beautiful
            Baltic coast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ActionLink to="/destinations">Explore destinations</ActionLink>
            <ActionLink to="/attractions" variant="text">
              Browse attractions →
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
