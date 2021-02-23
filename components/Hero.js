export default function Hero() {
  return (
    <section
      className="text-gray-500 body-font"
      style={{ background: 'yellow' }}
    >
      <div className="container mx-auto border-b flex px-5 py-24 items-center justify-center flex-col">
        <div className="lg:w-2/3 w-full">
          <h5 className="font-brand sm:text-5xl text-6xl mb-4 font-bold text-gray-900">
            Hi! Welcome to my website 👋
          </h5>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta
            illo a eum, quibusdam unde doloribus fugiat veritatis incidunt vitae
            totam nam cumque explicabo facere. Commodi nobis harum corporis
            temporibus.
          </p>
        </div>
      </div>
    </section>
  )
}
