import { Eyebrow } from '../atoms/Eyebrow'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-3xl font-serif text-5xl leading-tight font-medium tracking-tight text-primary md:text-7xl">
        {title}
      </h1>
      <p className="mt-5 mb-14 max-w-2xl text-lg leading-relaxed text-base-content/70 md:text-xl">
        {description}
      </p>
    </header>
  )
}
