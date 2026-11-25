// // import React from 'react'
import { Link } from "react-router"
import { useState } from "react"
import PropertyList from "../components/PropertyList"
import { PropertyData } from "../components/PropertyData"
import Caret from "../assets/images/CaretRight.png"
import House from "../assets/images/house-isolated-field (1) 1.png"
import Gps from "../assets/images/Vector (1).png"
import NotFound from "./NotFound";
import Bed from "../assets/images/Bed.png"
import Hou from '../assets/images/Vector (3).png'
import Status from "../assets/images/Vector (4).png"
import Naira from "../assets/images/Naira.png"



const Properties = () => {
    
  const [selectedLocation, setSelectedLocation]=useState("")
  const [selectedType, setSelectedType]=useState("")
  const [selectedBedroom, setSelectedBedroom]=useState("")
  const [selectedStatus, setSelectedStatus]=useState("")
  const [minPrice, setMinPrice]=useState("")
  const [maxPrice, setMaxPrice]=useState("")
  const [sortBy, setSortBy]=useState("")
  const [appliedFilter, setAppliedFilter]=useState({
    location:"",
    type: "",
    bedroom:"",
    status:"",
    minPrice:"",
    maxPrice:"",
  })

  // Apply button
  const handleFilter =()=>{
   setAppliedFilter({
    location:selectedLocation,
    type:selectedType,
    bedroom:selectedBedroom,
    status:selectedStatus,
    minPrice:minPrice,
    maxPrice:maxPrice,
   })
  }

  // const filteredLocation= selectedLocation === ""?PropertyData: PropertyData.filter( p =>{
  //   p.location.toLowerCase().includes(selectedLocation)
  // })

  let priceError=""

  if (((minPrice !== "" && 
    
      Number(minPrice) < 0) || 
      (maxPrice!== "" && 
    
      Number(maxPrice) < 0))){
      priceError = "Price cannot be less than 0"
  
    }else if (minPrice !== "" && 
    
    maxPrice !== "" && 
    
    Number(minPrice) > 
    
    Number(maxPrice)) {
    priceError= "Minimum Price cannot be greater than maximum Price"
  } 

  // Filters

  const filtersProperties= PropertyData.filter(
    p=>{
      const filtersLocation= appliedFilter.location===""||p.location.toLowerCase().includes(appliedFilter.location)

      const filtersType= appliedFilter.type===""|| p.type.toLowerCase()=== appliedFilter.type

      const filtersStatus= appliedFilter.status===""|| p.status.toLowerCase()=== appliedFilter.status

      const filtersBedroom= appliedFilter.bedroom ===""|| p.bedroom === Number(appliedFilter.bedroom)
      
      const filtersMinPrice= appliedFilter.minPrice===""|| p.price >= Number(appliedFilter.minPrice)
      
      const filtersMaxPrice= appliedFilter.maxPrice===""|| p.price <= Number(appliedFilter.maxPrice)

      return (filtersLocation 
      && filtersType
      && filtersStatus
      && filtersBedroom
      && filtersMinPrice
      && filtersMaxPrice)

    }
  )

  

  let visibleProperties = [...filtersProperties].sort((a,b) =>{
    if (sortBy === "price asc") {
      return a.price - b.price
    }
    if (sortBy === "price dsc") {
      return b.price - a.price
    }
    // if (sortBy === "price asc") {
    //   return a.price - b.price
    // }
    return 0
  })

  if (priceError !=="") {
    visibleProperties=[]
  }

  return (
      <div className="bg-gray-100 min-h-screen w-full  flex flex-col justify-center  items-center p-4 lg:p-1">
    <div className="max-w-sm md:max-w-2xl lg:max-w-7xl flex flex-col justify-center">
          
    <div>
      <section className="w-full bg-[#0A1210] flex justify-between pl-3 py-8 text-white lg:pl-5 lg:py-10">
        <div className=" flex flex-col">
          <h1 className="text-[24px] md:[28px] lg:text-[42px]">Property Listings</h1>
        <p className="text-[14px] md:text-lg">Browse our curated collection of premium properties</p>
        <nav className="flex justify-start items-center gap-1 text-sm md:text-[18px] mt-2">
        <Link to="/">Home</Link>
        <img src={Caret} alt="Caret-right icon" className="w-3.5 h-3.25" />
        <Link to="/properties">Properties</Link>
        </nav>
        </div>
        

        <div className="relative top-16 md:top-8 lg:top-10 overflow-hidden">
          <img src={House} alt="" className="w-50 h-20 md:w-64 lg:w-92 lg:h-32 object-cover object-top"/>
        </div>
        
    </section>
    </div>

    <section className="w-full p-5 lg:grid lg:grid-cols-7 lg:items-end lg:gap-6 lg:px-15">
      <div className="opacity-60 mb-2 lg:mb-0 lg:col-span-1 flex flex-col justify-end min-w-0">
        <div className="flex items-center gap-1 mb-1">
          <img src={Gps} alt="location-icon" className="w-3.2 h-4 shrink-0" />
        <label htmlFor="state" className="block text-md leading-tight truncate">Location</label>
        </div>
      <select 
      name="state" 
      id="state"
      value={selectedLocation}
      onChange={e =>{setSelectedLocation(e.currentTarget.value)}}
      className="w-full h-9 border text-sm rounded-lg px-2 py-1 outline-0"
      >
      <option value="">All Cities</option>
      <option value="abia">Abia</option>
      <option value="adamawa">Adamawa</option>
      <option value="akwa Ibom">Akwa Ibom</option>
      <option value="anambra">Anambra</option>
      <option value="bauchi">Bauchi</option>
      <option value="bayelsa">Bayelsa</option>
      <option value="benue">Benue</option>
      <option value="borno">Borno</option>
      <option value="cross-river">Cross River</option>
      <option value="delta">Delta</option>
      <option value="ebonyi">Ebonyi</option>
      <option value="edo">Edo</option>
      <option value="ekiti">Ekiti</option>
      <option value="enugu">Enugu</option>
      <option value="gombe">Gombe</option>
      <option value="imo">Imo</option>
      <option value="jigawa">Jigawa</option>
      <option value="kaduna">Kaduna</option>
      <option value="kano">Kano</option>
      <option value="katsina">Katsina</option>
      <option value="kebbi">Kebbi</option>
      <option value="kogi">Kogi</option>
      <option value="kwara">Kwara</option>
      <option value="lagos">Lagos</option>
      <option value="nasarawa">Nasarawa</option>
      <option value="niger">Niger</option>
      <option value="ogun">Ogun</option>
      <option value="ondo">Ondo</option>
      <option value="osun">Osun</option>
      <option value="oyo">Oyo</option>
      <option value="plateau">Plateau</option>
      <option value="rivers">Rivers</option>
      <option value="sokoto">Sokoto</option>
      <option value="taraba">Taraba</option>
      <option value="yobe">Yobe</option>
      <option value="zamfara">Zamfara</option>
      <option value="abuja">Abuja</option>

      </select>
      </div>

      <div className="flex items-end gap-4 opacity-60 mb-2 lg:mb-0 lg:col-span-2 min-w-0">
  
        <div className="flex-1 flex flex-col justify-end min-w-0">
         <div className="flex items-center gap-1">
          <img src={Hou} alt="property-icon" />
          <label htmlFor="types" className="block text-md leading-tight mb-1 truncate">Property Type</label>
         </div>
        <select 
        name="types" 
        id="types"
        value={selectedType}
        onChange={e=>{setSelectedType(e.currentTarget.value)}}
        className="w-full h-9 border text-sm rounded-lg px-2 py-1 outline-0"
      >
        <option value="">Property Type</option>
        <option value="villa">Villa</option>
        <option value="duplex">Duplex</option>
        <option value="apartment">Apartment</option>
        <option value="shop">Shop</option>
        <option value="warehouse">Warehouse</option>
        <option value="event-center">Event Center</option>
        <option value="land">Land</option>
        <option value="guest-house">Guest House</option>
         </select>
   </div>
    <div className="flex-1 flex flex-col justify-end min-w-0">
      <div className="flex items-center gap-1">
        <img src={Bed} alt="bed-icon" />
      <label htmlFor="bedroom" className="block text-md leading-tight mb-1 ">No of Bedrooms</label>
      </div>
      <select name="bedroom" id="bedroom"
      value={selectedBedroom}
      onChange={e=>{setSelectedBedroom(e.currentTarget.value)}}
      className="w-full h-9 border text-sm rounded-lg px-2 py-1 outline-0"
      >
        <option value="">Bedrooms</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
</div>
      <div className="opacity-60 mb-2 lg:mb-0 lg:col-span-1 flex flex-col justify-end min-w-0">
        <div className="flex
        items-center gap-1">
          <img src={Status} alt="status-icon" className="w-3 h-3"/>
        <label htmlFor="status" className="block text-md leading-tight mb-1 truncate">Listing Status</label>
        </div>
      <select name="status" id="status"
      value={selectedStatus}
      onChange={e=>{setSelectedStatus(e.currentTarget.value)}}
      className="w-full h-9 border text-sm rounded-lg px-2 py-1 outline-0"
      >
        <option value="">Status</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
      </select>
      </div>

      <div className="opacity-60 mb-4 lg:mb-0 lg:col-span-2 flex flex-col justify-end min-w-0">
       <div className="flex items-center gap-1">
         <img src={Naira} alt="icon-naira" className="w-3 h-3 shrink-0"/>
        <label htmlFor="price" className="block text-md leading-tight mb-1 truncate">Price</label>
       </div>
      <div className="flex items-center gap-4">
        <input 
      type="number" 
      id="minprice" 
      aria-label="Minimum Price"
      value={minPrice}
      placeholder="min"
      onChange={e=> {setMinPrice(e.currentTarget.value)}}
      className="w-full h-9 min-w-0 border text-sm rounded-lg px-2 py-1 outline-0"
      />

      <input 
      type="number" 
      id="maxprice"
      aria-label="Maximum Price"
      value={maxPrice}
      placeholder="max"
      onChange={e=>{setMaxPrice(e.currentTarget.value)}}
      className="w-full h-9 min-w-0 border text-sm rounded-lg px-2 py-1 outline-0"
      />
      </div>
      {priceError && <p className="text-red-700 text-sm 
      ">{priceError}</p>}

      </div>
      <div className="lg:col-span-1 flex flex-col justify-end">
        <button type="button" onClick={handleFilter} className="w-full h-9 bg-[#1A3C34] hover:bg-[#1a3d2e] hover:cursor-pointer px-3 py-1 rounded-lg">Apply</button>
      </div>
     </section> 

        <p>{appliedFilter.status==="sale"?"Real Estate & Homes For Sale":appliedFilter.status==="rent"?"Real Estate & Homes For Rent":""
        }</p>
        
    <div className="flex justify-between items-center mb-2 p-4">
       <p className="text-sm md:text-lg">Showing {visibleProperties.length} of {PropertyData.length}</p>

     <select name="default" id="default"
     value={sortBy}
     onChange={e=>setSortBy(e.currentTarget.value)}
     className="border rounded-lg outline-0 p-1"
     >
      <option value="">Sort by Default</option>
      <option value="price asc">Price: Low to High</option>
      <option value="price dsc">Price: High to Low</option>
      {/* <option value=""></option>
      <option value=""></option> */}
     </select>
    </div>
     
     
      {priceError !== "" ? (
        <div>
        <p>Please input a valid price range for properties to be shown.</p>
      </div>
     
    ):visibleProperties.length === 0 ? (
        <NotFound/>

    ):(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {visibleProperties.map(i =>{
       return <PropertyList
        key={i.id}
        property={i}/>
      })
      }
      </div>)

    }
    </div>
    </div>

   
    
  )
}

export default Properties


// **Pagination** is simply splitting a large list of items into smaller "pages" so you show a few items at a time instead of dumping all of them onto the screen at once.

// ### A Daily Life Example: Reading a Physical Book

// Imagine you have a book with **60 pages** of recipes, and you're sitting at a table:

// * Instead of spreading all **60 pages** across the floor at the same time (which would be overwhelming and slow to scan), you read **6 pages per sitting** (`itemsPerPage = 6`).
// * **Page 1** shows recipes **1–6**.
// * Clicking **Next** flips to **Page 2**, showing recipes **7–12**.
// * Clicking **Previous** flips back to **Page 1**.
// * And if you filter down to *"only chocolate desserts"* and there are only **4** of them, you only need **1 page**—you don't need **10 pages** anymore.

// ### How That Maps to Your `Properties.tsx` Code

// In your `Properties.tsx` component, it works the exact same way:

// 1. **`visibleProperties` is your full stack of matching cards** after filtering and sorting.
// 2. **`itemsPerPage = 6` is how many cards fit on one page** (like 6 pages per sitting).
// 3. **`currentPage` is the page number you're currently looking at** (starts at `1`).
// 4. **`.slice(startIndex, startIndex + itemsPerPage)` pulls just that page's cards**—so if `currentPage` is `2` and `itemsPerPage` is `6`, it grabs items at index `6` through `11` (the 7th through 12th properties) instead of rendering every single one at once.
// 5. **Resetting to page `1` on Apply or Sort:** Just like starting a fresh topic search in a book, when a user clicks **Apply** or changes **Sort by**, jumping back to **Page 1** prevents them from landing on "Page 3 of 1" when the total number of results shrinks.

// ### Why People Use It in Web Apps

// * **Cleaner screen:** Users don't have to scroll forever on mobile or desktop.
// * **Better performance:** Rendering 6–12 cards at a time is lighter on the browser than rendering hundreds of cards with images at once.

// How does that book analogy feel—does the `.slice(...)` part in `Properties.tsx` make more sense now?