import { Button, createStyles, Text, Image, Title } from '@mantine/core'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import DateFormatter from './date-formatter'

const useStyles = createStyles(theme => ({
  postsGrid: {
    marginBlock: 'var(--space-700)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    gridTemplateRows: 'auto',
    alignItems: 'start',
    gap: theme.spacing.xl,
  },
  postContainer: {
    display: 'grid',
    gridTemplateRows: '14rem auto',
    gap: theme.spacing.sm,
  },
  postHeading: {
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    marginBlock: theme.spacing.sm,
    color:
      theme.colorScheme === 'light'
        ? 'var(--color-heading)'
        : theme.colors.dark[0],
  },
  image: {
    height: '14rem',
  },
  postExcerpt: {
    marginBlock: theme.spacing.sm,
    opacity: 0.7,
  },
}))

export default function LatestPosts({ latestPosts }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.postsGrid}>
        {latestPosts.map(post => (
          <div key={post.slug} className={classes.postContainer}>
            <figure className={classes.imageFigure}>
              <Image
                classNames={{ image: classes.image }}
                src={post.coverImage}
                alt="Blog Image"
              />
            </figure>
            <div>
              <Text color="dimmed">
                <DateFormatter dateString={post.date} />
              </Text>
              <Title order={4} className={classes.postHeading}>
                {post.title}
              </Title>
              <Text className={classes.postExcerpt} lineClamp={3}>
                {`${post.excerpt}...`}
              </Text>
              <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                <Button variant="link" rightIcon={<ArrowRightIcon />}>
                  Keep Reading
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
