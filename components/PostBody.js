export default function PostBody({ content }) {
  return (
    <div
      className="post-item"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  )
}
