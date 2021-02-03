import Head from "next/head"

export default function Header() {
  return (
    <header class="text-gray-600 body-font ">
      <div class="container border-b mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="text-xl">Oladotun Aluko</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:bg-gray-200 py-1 px-3 focus:outline-none rounded">
            About
          </a>
          <a class="hover:bg-gray-200 py-1 px-3 focus:outline-none rounded">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
