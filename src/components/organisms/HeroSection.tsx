import { ActionLink } from '../atoms/ActionLink'
import { Eyebrow } from '../atoms/Eyebrow'

export function HeroSection() {
  return (
    <section className="hero min-h-[38rem] bg-base-100">
      <div className="hero-content w-full max-w-6xl flex-col gap-14 px-5 py-16 lg:flex-row-reverse lg:justify-between lg:gap-20">
        <div
          className="w-full max-w-md rotate-2 overflow-hidden rounded-box border border-base-300 shadow-2xl"
          aria-hidden="true"
        >
          <div className="h-36 bg-white sm:h-48" />
          <div className="h-36 bg-red-600 sm:h-48" />
        </div>

        <div className="max-w-2xl">
          <Eyebrow>Your next journey starts here</Eyebrow>
          <h1 className="font-serif text-5xl leading-none font-medium tracking-tight text-primary sm:text-6xl lg:text-8xl">
            Fall in love with Poland
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-base-content/70 md:text-xl">
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
