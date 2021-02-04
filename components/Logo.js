import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <a className="font-brand font-medium text-gray-900">
        <span className="text-xl">Oladotun Aluko</span>
      </a>
    </Link>
  )
}
