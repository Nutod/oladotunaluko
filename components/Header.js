import Head from "next/head"
import Link from "next/link"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="text-gray-600 shadow">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a className="mr-5 hover:bg-gray-200 py-1 px-3 cursor-pointer focus:outline-none rounded">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover:bg-gray-200 py-1 px-3 cursor-pointer focus:outline-none rounded">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
