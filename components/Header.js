import { Container, createStyles, mergeClassNames } from '@mantine/core'
import Link from 'next/link'
import Logo from './Logo'

const useStyles = createStyles(theme => ({
  headerContainer: {
    background: 'pink',
    padding: theme.spacing.sm,
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <header className={classes.headerContainer}>
      <Container>
        <div>
          <Logo />
          <button>Dark Mode</button>
        </div>
        {/* <Logo />
        <nav>
          <ul>
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </li>
            ) : (
              <li onClick={toggleTheme}>
                <svg
                  className="large-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </li>
            )}
          </ul>
        </nav>
      */}
      </Container>
    </header>
  )
}
