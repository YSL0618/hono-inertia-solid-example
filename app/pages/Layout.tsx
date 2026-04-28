import { Link } from '@inertiajs/react'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app">
      <header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
