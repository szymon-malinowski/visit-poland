import { Outlet } from '@tanstack/react-router'
import { SiteFooter } from '../organisms/SiteFooter'
import { SiteHeader } from '../organisms/SiteHeader'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-base-200 text-base-content">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
