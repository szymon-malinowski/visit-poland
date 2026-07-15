import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="badge badge-secondary badge-outline mb-4 font-bold tracking-widest uppercase">
      {children}
    </p>
  )
}
