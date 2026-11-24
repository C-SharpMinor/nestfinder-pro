export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Smart Way To Find<br />Your Next Home
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-100">
          Unlock your dream home at NestFinder Pro we help you compare discover and make sure you have a lovely stay in your beautiful apartment
        </p>
        <a
          href="#properties"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
