import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

export default function FeaturedProperties() {
  const [search, setSearch] = useState('');

  const filtered = properties.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="properties" className="bg-light-section py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Discover Our Featured Properties</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Dive into our exquisite collection of our featured properties at Nest Finder Pro, every corner whispers comfort and every detail is crafted with perfection
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-semibold transition">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
