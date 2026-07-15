import { Eyebrow } from '../atoms/Eyebrow'

export function IntroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-5 border-t border-base-300 px-5 py-16 md:grid-cols-2 md:gap-20 md:py-24">
      <div>
        <Eyebrow>Why Poland?</Eyebrow>
        <h2 className="font-serif text-3xl font-semibold text-primary">
          A country full of stories
        </h2>
      </div>
      <p className="text-lg leading-loose text-base-content/70">
        From medieval market squares to quiet forest trails, every region has a
        character of its own. Start with a city or choose the experience that
        inspires you.
      </p>
    </section>
  )
}
