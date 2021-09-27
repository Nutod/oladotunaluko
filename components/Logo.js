import { createStyles, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  heading: {
    letterSpacing: '-0.05em',
    color: 'var(--color-logo)',

    '& > span': {
      color: 'var(--color-secondary)',
    },
  },
}))

export default function Logo() {
  const classes = useStyles()

  return (
    <>
      <Title order={4} className={classes.heading}>
        oladotun<span>aluko.</span>
      </Title>
    </>
  )
}
