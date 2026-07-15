import { ActionLink } from '../components/atoms/ActionLink'
import { Eyebrow } from '../components/atoms/Eyebrow'

export function NotFoundPage() {
  return (
    <section className="hero min-h-[70vh]">
      <div className="hero-content items-start text-left">
        <div className="max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="font-serif text-5xl leading-tight text-primary md:text-7xl">
            That place is not on our map
          </h1>
          <p className="mt-5 mb-8 text-lg text-base-content/70">
            The page you requested could not be found.
          </p>
          <ActionLink to="/">Back to home</ActionLink>
        </div>
      </div>
    </section>
  )
}
