import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <div className="container header">
        <Logo />
        <nav>
          <ul>
            <li>
              <a href="Blog">Blog</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
            {theme === 'dark' ? (
              <li onClick={toggleTheme}>
                <svg
                  className="large-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </li>
            ) : (
              <li onClick={toggleTheme}>
                <svg
                  className="large-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
