import { Link } from '@tanstack/react-router'

type ActionLinkProps = {
  children: string
  to: '/' | '/attractions' | '/destinations'
  variant?: 'button' | 'text'
}

export function ActionLink({
  children,
  to,
  variant = 'button',
}: ActionLinkProps) {
  const className =
    variant === 'button'
      ? 'btn btn-primary'
      : 'link link-primary link-hover font-semibold'

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}
