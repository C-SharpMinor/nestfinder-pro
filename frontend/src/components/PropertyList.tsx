// import React from 'react'
import type { Property } from "../types/property"



interface PropertyProps{
    property:Property
}

const PropertyList = ({property}: PropertyProps) => {
  return (
    <section>
      <img src={property.img} alt={property.title} className="w-[398px] h-[322px]" />
      <div className="h-[227px] font-[]">
        <h2>{property.title}</h2>
      <h3>{property.location}</h3>
      <div>
        <p>{property.size} Sqm</p>
      </div>
      <div>
        <p>{property.bedroom} Beds</p>
      </div>
      <div>
        <p>{property.bath} Baths</p>
      </div>

      <button type="button">View Button</button>
      <p>₦{property.price.toLocaleString("en-NG")}</p>
      </div>
    </section>
  )
}




export default PropertyList;