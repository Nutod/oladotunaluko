import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const { theme } = useTheme()

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
