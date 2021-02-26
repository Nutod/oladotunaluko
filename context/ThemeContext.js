import React from 'react'

function getInitialColorMode() {
  if (typeof window !== 'undefined') {
    const persistedColorPreference = window.localStorage.getItem('color-mode')
    const hasPersistedPreference = typeof persistedColorPreference === 'string'

    if (hasPersistedPreference) {
      return persistedColorPreference
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const hasMediaQueryPreference = typeof mql.matches === 'boolean'

    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light'
    }

    return 'dark'
  } else {
    return 'light'
  }
}

const ThemeContext = React.createContext()
ThemeContext.displayName = 'ThemeContext'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => getInitialColorMode())

  const toggleTheme = () => {
    let updatedThemeValue = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedThemeValue)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('color-mode', updatedThemeValue)
    }
  }

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
