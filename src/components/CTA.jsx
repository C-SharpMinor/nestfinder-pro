export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/living-room.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content - Card placed on the left */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 max-w-md shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Ready To Find Your Perfect Home
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-8 leading-relaxed">
            Browse verified listings, connect with trusted agents, and move in with confidence.
          </p>
          <a
            href="#properties"
            className="inline-block bg-[#1A4F48] hover:bg-[#0D3B36] text-white font-medium px-8 py-3.5 rounded-xl transition"
          >
            Explore All Properties
          </a>
        </div>
      </div>
    </section>
  );
}