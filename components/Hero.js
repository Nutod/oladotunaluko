import { Container, createStyles, Text, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  heroContainer: {
    marginBlockStart: '3rem',
    maxWidth: '40rem',
  },
  heroHeading: {
    letterSpacing: '-0.06em',
    marginBlockEnd: theme.spacing.md,
    color: 'var(--text1)',
  },
  heroSubtitle: {
    fontWeight: '400',
    color: 'var(--text2)',
  },
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.heroContainer}>
        <Title order={3} className={classes.heroHeading}>
          Hi! My name is Oladotun
        </Title>
        <Title order={4} className={classes.heroSubtitle}>
          I'm a Software Developer focused on the front-end things of the web.
          This is my site where I write about things I'm interested in. If you'd
          like to know more about me, look{' '}
          <Link href="/about">
            <a>here</a>
          </Link>
          .
        </Title>
        <br />
      </div>
    </Container>
  )
}
