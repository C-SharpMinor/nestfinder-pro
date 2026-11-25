import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { useState } from 'react';
import type { Property } from '../types/property';
import {Link} from 'react-router'


interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div 
  className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-4 hover:rotate-x-2 hover:scale-105"
  style={{
    transformStyle: 'preserve-3d',
  }}
>
      <div className="relative">
        <img src={property.img} alt={property.title} className="w-full h-56 object-cover" />
        {property.discount && (
          <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            {property.discount}
          </span>
        )}
        
      </div>

      <div className="p-5">
        <h3
          className="mb-1"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          {property.title}
        </h3>
        <p className="flex items-center gap-1 text-sm text-text-muted mb-4">
          <FaMapMarkerAlt className="text-accent" /> {property.location}
        </p>

        <div className="flex items-center gap-4 text-xs text-text-muted mb-5">
          <span className="flex items-center gap-1"><FaRulerCombined /> {property.size} Sqm</span>
          <span className="flex items-center gap-1"><FaBed /> {property.bedroom} Beds</span>
          <span className="flex items-center gap-1"><FaBath /> {property.bath} Baths</span>
        </div>

        <div className="flex items-center justify-between">
          <Link to={`/properties/${property.id}`} className="bg-primary hover:bg-primary-light text-white text-sm px-4 py-2 rounded-lg font-medium transition">
            View Property
          </Link>
          <p
            style={{
              fontFamily: '"Gentium Plus", serif',
              fontWeight: 400,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            ₦{property.price.toLocaleString("en-NG")}
          </p>
        </div>
      </div>
    </div>
  );
}