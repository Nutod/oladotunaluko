import React from 'react'
import { Container, createStyles, Divider, ThemeIcon } from '@mantine/core'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import Logo from './Logo'

const useStyles = createStyles(theme => ({
  headerContainer: {
    paddingBlock: theme.spacing.lg,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  themeButton: {
    border: '0',
    background: theme.colorScheme === 'light' ? '#d8eefe' : theme.black,
    color: theme.colorScheme === 'light' ? 'var(--color-heading)' : theme.white,
    padding: '4px',
    paddingInlineStart: theme.spacing.md,
    borderRadius: theme.radius.xl,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    cursor: 'pointer',
  },
  themeButtonIcon: {
    background:
      theme.colorScheme === 'light'
        ? theme.colors.dark[7]
        : theme.colors.yellow[5],
    color:
      theme.colorScheme === 'light'
        ? theme.colors.blue[3]
        : theme.colors.dark[5],
  },
}))

export default function Header() {
  const classes = useStyles()
  const [theme, setTheme] = React.useState(true)

  return (
    <>
      <header className={classes.headerContainer}>
        <Container>
          <div className={classes.headerContent}>
            <Logo />
            {theme ? (
              <button
                className={classes.themeButton}
                // onClick={toggle}
              >
                <span>Dark theme</span>
                <ThemeIcon
                  radius="xl"
                  variant="light"
                  className={classes.themeButtonIcon}
                >
                  <MoonIcon />
                </ThemeIcon>
              </button>
            ) : (
              <button
                className={classes.themeButton}
                // onClick={toggle}
              >
                <span>Light theme</span>
                <ThemeIcon
                  radius="xl"
                  variant="light"
                  className={classes.themeButtonIcon}
                >
                  <SunIcon />
                </ThemeIcon>
              </button>
            )}
          </div>
        </Container>
      </header>
      <Divider color="gray" />
    </>
  )
}
