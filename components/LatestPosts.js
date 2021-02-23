const posts = [
  {
    image: 'https://placeimg.com/640/480/nature',
    data: 9 / 8 / 2035,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    excerpt:
      'man member sign warm mice ear swung learn clothing police higher row slightly tropical discuss near exactly seldom quite west composition dozen come hope',
  },
  {
    image: 'https://placeimg.com/640/480/tech',
    data: 2 / 6 / 2078,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    excerpt:
      'sister definition upward given composition strength heard substance difficult half knife children measure making union frighten everyone spend low worth sign shade fifty recognize',
  },
  {
    image: 'https://placeimg.com/640/480/arch',
    data: 9 / 3 / 2072,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    excerpt:
      'torn busy number steel tone terrible sail wolf finally generally promised horse dirt noted heading reach week song fed deal original view cut possibly',
  },
  {
    image: 'https://placeimg.com/640/480/nature',
    data: 5 / 13 / 2049,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    excerpt:
      'loud work west cannot slowly not information lamp older belt grabbed radio firm clearly father guard dirt elephant chart loss medicine concerned studied total',
  },
]

export default function LatestPosts() {
  return (
    <div className="container">
      <h3>Latest Posts</h3>
      <div className="grid">
        {posts.map(post => (
          <div>
            <img src={post.image} alt="Blog Image" />
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
            <p>{new Date(post.data).toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
