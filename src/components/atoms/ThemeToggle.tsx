import { useLayoutEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'visit-poland-theme'

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(storageKey)

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
  } catch {
    // Use the system preference when browser storage is unavailable.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const isDark = theme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      localStorage.setItem(storageKey, theme)
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
  }, [theme])

  return (
    <button
      type="button"
      className={`btn btn-circle btn-ghost swap swap-rotate shrink-0 ${isDark ? 'swap-active' : ''}`}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={isDark}
      title={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
    >
      <svg
        className="swap-on size-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M5.64 17.66 4.22 19.07l-1.41-1.41 1.41-1.42 1.42 1.42ZM11 22h2v-3h-2v3Zm8.78-2.93-1.41-1.41-1.42 1.41 1.42 1.42 1.41-1.42ZM20 11v2h3v-2h-3ZM13 2h-2v3h2V2Zm3.36 3.64 1.42-1.42 1.41 1.42-1.41 1.41-1.42-1.41ZM4 11H1v2h3v-2Zm1.64-5.36L4.22 4.22 2.81 5.64l1.41 1.41 1.42-1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
      </svg>
      <svg
        className="swap-off size-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.64 13a1 1 0 0 0-1.05-.14A8.05 8.05 0 0 1 17.22 13 8.15 8.15 0 0 1 11 6.78a8.05 8.05 0 0 1 .14-3.37A1 1 0 0 0 9.86 2.2 10 10 0 1 0 21.8 14.14a1 1 0 0 0-.16-1.14Z" />
      </svg>
    </button>
  )
}
