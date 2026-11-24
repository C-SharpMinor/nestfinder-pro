export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">WHY CHOOSE US</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Find Your Perfect Home With NestFinder Pro</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/images/white-mansion.jpg" alt="Smart search" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold mb-2">Smart Property search</h3>
              <p className="text-sm text-text-muted">Easily find your perfect home with NetFinder Pro smart filters, search by price, range and location</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/images/brick-fountain.jpg" alt="Verified" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold mb-2">Verified Listings & Agents</h3>
              <p className="text-sm text-text-muted">Easily find your perfect home with NetFinder Pro smart filters, search by price, range and location</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src="/images/yellow-house.jpg" alt="Modern living" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold mb-2">Modern Living & Redefined</h3>
              <p className="text-sm text-text-muted">Easily find your perfect home with NetFinder Pro smart filters, search by price, range and location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
