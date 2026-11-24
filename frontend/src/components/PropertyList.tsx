import type { Property } from "../types/property";
import Bed from "../assets/images/Bed.png";
import Mid from "../assets/images/mdi_set-square (1).png";
import Gps from "../assets/images/Vector (1).png";
import Bath from "../assets/images/Vector (2).png";
import { Link } from "react-router";

interface PropertyProps {
  property: Property;
}

const PropertyList = ({ property }: PropertyProps) => {
  return (
    <article className="bg-white m-2 rounded-2xl overflow-hidden shadow-sm">
      <img
        src={property.img}
        alt={property.title}
        className="w-full h-80 object-cover block"
      />

      <div className="p-4">
        <h2 className="font-bold text-xl mb-3">{property.title}</h2>

        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <img src={Gps} alt="" className="w-4 h-4 object-contain shrink-0" />
          <h3 className="text-sm">{property.location}</h3>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm mb-5 text-gray-700">
          <div className="flex items-center gap-1.5">
            <img src={Mid} alt="" className="w-4 h-3 object-contain shrink-0" />
            <p>{property.size} Sqm</p>
          </div>

          <div className="flex items-center gap-1.5">
            <img src={Bed} alt="" className="w-4 h-3 object-contain shrink-0" />
            <p>{property.bedroom} Beds</p>
          </div>

          <div className="flex items-center gap-1.5">
            <img src={Bath} alt="" className="w-4 h-3 object-contain shrink-0" />
            <p>{property.bath} Baths</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/properties/${property.id}`}
            className="bg-[#1A3C34] hover:bg-[#234E44] transition-colors px-4 py-2 rounded-xl text-white text-sm font-medium"
          >
            View Property
          </Link>

          <p className="text-xl sm:text-2xl font-semibold">
            ₦{property.price.toLocaleString("en-NG")}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PropertyList;



// // import React from 'react'
// import type { Property } from "../types/property"
// import Bed from "../assets/images/Bed.png"
// import Mid from "../assets/images/mdi_set-square (1).png"
// import Gps from "../assets/images/Vector (1).png"
// import Bath from "../assets/images/Vector (2).png"
// import {Link} from "react-router"





// interface PropertyProps{
//     property:Property
// }

// const PropertyList = ({property}: PropertyProps) => {
//   return (
//     <section className="bg-[#fff] m-2 rounded-2xl">
//       <img src={property.img} alt={property.title} className="w-full h-[322px] mb-5 object-cover" />
//       <div className="h-[200px] p-3 ">
//     <section className="bg-[#fff] m-2 rounded-lg overflow-hidden">
//       <img src={property.img} alt={property.title} className="w-full h-80.5 mb-5 object-cover" />
//       <div className="h-50 p-3 ">
//             <h2 className="font-bold text-xl leading-1 mb-5">{property.title}</h2>
//           <div className="flex justify-start items-center gap-2 mb-5">
//             <img src={Gps} alt="location-icon" />
//             <h3>{property.location}</h3>
//           </div>
     
//           <div className="flex justify-start items-center gap-4 text-[14px] mb-5">
//             <div className="flex justify-start items-center gap-2">
//               <img src={Mid} alt="mid-set-square-icon" className="w-[17px] h-[12px]" />
//               <img src={Mid} alt="mid-set-square-icon" className="w-4.25 h-3" />
//               <p >{property.size} Sqm</p>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <img src={Bed} alt="Bed-icon" className="w-[17px] h-[12px]"/>
//               <p>{property.bedroom} Beds</p>
//             </div>
//             <div className="flex justify-start items-center gap-2">
//               <img src={Bath} alt="tub-icon" className="w-[17px] h-[12px]"/>
//               <p>{property.bath} Baths</p>
//             </div>
//      </div>

//       <div className="flex justify-between items-center ">
//         <Link
//     to={`/properties/${property.id}`} className="bg-[#1A3C34] p-2 rounded-2xl text-white text-md cursor-pointer">View Property</Link>
//         <button type="button" className="bg-[#1A3C34] p-2 rounded-lg text-white text-md">View Property</button>
//       <p className="text-2xl">₦{property.price.toLocaleString("en-NG")}</p>
//       </div>


//       </div>
//     </section>
//   )
// }




// export default PropertyList;