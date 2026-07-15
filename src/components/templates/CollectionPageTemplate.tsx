import type { ReactNode } from 'react'
import { PageHeader } from '../molecules/PageHeader'

type CollectionPageTemplateProps = {
  children: ReactNode
  eyebrow: string
  title: string
  description: string
}

export function CollectionPageTemplate({
  children,
  eyebrow,
  title,
  description,
}: CollectionPageTemplateProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
      <PageHeader
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
      {children}
    </section>
  )
}
