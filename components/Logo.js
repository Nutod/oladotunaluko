import { createStyles, Title } from '@mantine/core'

const useStyles = createStyles(theme => ({
  heading: {
    letterSpacing: '-0.05em',
    color:
      theme.colorScheme === 'light' ? 'var(--text1)' : theme.colors.dark[0],
    cursor: 'pointer',

    '& > span': {
      color:
        theme.colorScheme === 'light'
          ? 'var(--color-brand)'
          : 'var(--color-secondary)',
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
