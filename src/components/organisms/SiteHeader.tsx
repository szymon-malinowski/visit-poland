import { Link } from '@tanstack/react-router'

export function SiteHeader() {
  return (
    <header className="border-b border-base-300 bg-base-100">
      <div className="navbar mx-auto max-w-6xl px-5">
        <div className="navbar-start">
          <Link className="btn btn-ghost px-0 font-serif text-xl text-primary sm:text-2xl" to="/">
            Visit Poland
          </Link>
        </div>

        <nav className="navbar-end overflow-x-auto" aria-label="Main navigation">
          <ul className="menu menu-horizontal flex-nowrap gap-1 px-0">
            <li>
              <Link activeOptions={{ exact: true }} activeProps={{ className: 'menu-active' }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeProps={{ className: 'menu-active' }} to="/destinations">
                Destinations
              </Link>
            </li>
            <li>
              <Link activeProps={{ className: 'menu-active' }} to="/attractions">
                Attractions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
