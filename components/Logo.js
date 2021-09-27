import { createStyles, Title } from '@mantine/core'

const useStyles = createStyles(() => ({
  heading: {
    letterSpacing: '-0.05em',
    color: 'var(--color-heading)',
    cursor: 'pointer',

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
