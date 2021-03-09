import React from 'react'

const ThemeContext = React.createContext()
ThemeContext.displayName = 'ThemeContext'

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState('light')

  React.useLayoutEffect(() => setMounted(true), [])

  React.useEffect(() => {
    // 1. Check localstorage
    const persistedThemeValue = localStorage.getItem('--color-mode')

    if (persistedThemeValue) {
      setTheme(persistedThemeValue)
      return
    }

    // 2. Check prefers color scheme

    // 3. return a default value as third option
    setTheme('light')
  }, [])

  const toggleTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light'

    // prevTheme => (prevTheme === 'light' ? 'dark' : 'light')
    setTheme(newTheme)
    localStorage.setItem('--color-mode', newTheme)
  }

  const value = { theme, toggleTheme, mounted }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
