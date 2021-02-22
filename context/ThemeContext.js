import React from 'react'

const ThemeContext = React.createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('')

  const toggleTheme = () => {
    setTheme(theme => (theme === '' ? 'dark' : ''))
  }

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
