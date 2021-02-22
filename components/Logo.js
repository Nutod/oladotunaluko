import Link from 'next/link'

export default function Logo() {
  return (
    <div>
      <h3 className="no-margin">
        <Link href="/">
          <a>
            oladotun<span>aluko</span>
          </a>
        </Link>
      </h3>
    </div>
  )
}
