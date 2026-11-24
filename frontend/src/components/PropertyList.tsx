// import React from 'react'
import type { Property } from "../types/property"
import Bed from "../assets/images/Bed.png"
import Mid from "../assets/images/mdi_set-square (1).png"
import Gps from "../assets/images/Vector (1).png"
import Bath from "../assets/images/Vector (2).png"
<<<<<<< HEAD
import {Link} from "react-router"


=======



>>>>>>> property-list
interface PropertyProps{
    property:Property
}

const PropertyList = ({property}: PropertyProps) => {
  return (
<<<<<<< HEAD
    <section className="bg-[#fff] m-2 rounded-2xl">
      <img src={property.img} alt={property.title} className="w-full h-[322px] mb-5 object-cover" />
      <div className="h-[200px] p-3 ">
=======
    <section className="bg-[#fff] m-2 rounded-lg overflow-hidden">
      <img src={property.img} alt={property.title} className="w-full h-80.5 mb-5 object-cover" />
      <div className="h-50 p-3 ">
>>>>>>> property-list
            <h2 className="font-bold text-xl leading-1 mb-5">{property.title}</h2>
          <div className="flex justify-start items-center gap-2 mb-5">
            <img src={Gps} alt="location-icon" />
            <h3>{property.location}</h3>
          </div>
     
          <div className="flex justify-start items-center gap-4 text-[14px] mb-5">
            <div className="flex justify-start items-center gap-2">
<<<<<<< HEAD
              <img src={Mid} alt="mid-set-square-icon" className="w-[17px] h-[12px]" />
=======
              <img src={Mid} alt="mid-set-square-icon" className="w-4.25 h-3" />
>>>>>>> property-list
              <p >{property.size} Sqm</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img src={Bed} alt="Bed-icon" className="w-[17px] h-[12px]"/>
              <p>{property.bedroom} Beds</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img src={Bath} alt="tub-icon" className="w-[17px] h-[12px]"/>
              <p>{property.bath} Baths</p>
            </div>
     </div>

      <div className="flex justify-between items-center ">
<<<<<<< HEAD
        <Link
    to={`/properties/${property.id}`} className="bg-[#1A3C34] p-2 rounded-2xl text-white text-md cursor-pointer">View Property</Link>
=======
        <button type="button" className="bg-[#1A3C34] p-2 rounded-lg text-white text-md">View Property</button>
>>>>>>> property-list
      <p className="text-2xl">₦{property.price.toLocaleString("en-NG")}</p>
      </div>
      </div>
    </section>
  )
}




export default PropertyList;