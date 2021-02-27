import Link from 'next/link'

export default function Logo() {
  return (
    <div className="logo">
      <h4 className="no-margin">
        <Link href="/">
          <a>
            oladotun<span>aluko</span>
          </a>
        </Link>
      </h4>
    </div>
  )
}
