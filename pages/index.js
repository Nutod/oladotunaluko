import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <section className="text-gray-500 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <h2 className="sm:text-4xl text-center text-5xl font-brand font-medium text-gray-900 mt-4 mb-12">
            Latest Posts
          </h2>
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 font-bold text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl font-brand font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Keep Reading
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 font-bold text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl font-brand font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Keep Reading
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 font-bold text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl font-brand font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h2>
              <p className="leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam magnam, saepe, iste nostrum sequi quisquam doloremque
                molestiae ea quos adipisci eveniet, cum eum atque? Minima iure
                optio aut quo aliquam?
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Keep Reading
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 font-bold text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl font-brand font-medium text-gray-900 mt-4 mb-4">
                Pinterest DIY dreamcatcher gentrify single-origin coffee
              </h2>
              <p className="leading-relaxed mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem aut veniam consectetur ex vel et suscipit. Qui
                error pariatur quae cumque, quisquam incidunt vitae excepturi
                iusto laboriosam itaque quaerat est?
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Keep Reading
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
