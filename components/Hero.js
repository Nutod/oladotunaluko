import { Container, createStyles, Text, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  heroContainer: {
    marginBlockStart: '3rem',
    maxWidth: '40rem',
  },
  heroHeading: {
    letterSpacing: '-0.04em',
    marginBlockEnd: theme.spacing.md,
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.heroContainer}>
        <Title order={2} className={classes.heroHeading}>
          Hi! My name is Oladotun
        </Title>
        <Text>
          I'm a Software Developer focused on the front-end things of the web.
          This is my site where I write about things I'm interested in. If you'd
          like to know more about me, look{' '}
          <Link href="/about">
            <a>here</a>
          </Link>
          .
        </Text>
        <br />
        <Text>
          While you're here, do check out some of my latest posts and you could
          check{' '}
          <Link href="/posts">
            <a>here</a>
          </Link>{' '}
          as well for other posts. Hope you find something useful.
        </Text>
      </div>
    </Container>
  )
}
