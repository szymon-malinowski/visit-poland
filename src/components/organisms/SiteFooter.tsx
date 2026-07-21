import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="footer mx-auto max-w-6xl px-5 py-10 text-sm sm:footer-horizontal">
        <aside className="max-w-xs">
          <Link className="font-serif text-xl font-semibold text-primary" to="/">
            Visit Poland
          </Link>
          <p className="leading-relaxed text-base-content/65">
            Discover Poland's cities, landmarks, landscapes, and traditional
            cuisine.
          </p>
        </aside>

        <nav aria-label="Explore">
          <h2 className="footer-title text-base-content">Explore</h2>
          <Link className="link link-hover" to="/destinations">
            Destinations
          </Link>
          <Link className="link link-hover" to="/attractions">
            Attractions
          </Link>
          <Link className="link link-hover" to="/food">
            Food
          </Link>
        </nav>

        <nav aria-label="Legal">
          <h2 className="footer-title text-base-content">Legal</h2>
          <Link className="link link-hover" to="/impressum">
            Impressum
          </Link>
        </nav>
      </div>
      <div className="border-t border-base-300">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-base-content/60">
          © {new Date().getFullYear()} Visit Poland. Educational project.
        </p>
      </div>
    </footer>
  )
}
