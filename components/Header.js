import { Container, createStyles, Divider } from '@mantine/core'
import Logo from './Logo'

const useStyles = createStyles(theme => ({
  headerContainer: {
    paddingBlock: theme.spacing.lg,
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <>
      <header className={classes.headerContainer}>
        <Container>
          <div>
            <Logo />
            {/* <button>Dark Mode</button> */}
          </div>
        </Container>
      </header>
      <Divider color="gray" />
    </>
  )
}
