// import React from 'react'
import { Link } from "react-router"
import { useState } from "react"
import PropertyList from "../components/PropertyList"
import { PropertyData } from "../components/PropertyData"
import Caret from "../assets/images/CaretRight.png"
import House from "../assets/images/house-isolated-field (1) 1.png"
import Gps from "../assets/images/Vector (1).png"



const Properties = () => {
    
  const [selectedLocation, setSelectedLocation]=useState("")
  const [selectedType, setSelectedType]=useState("")
  const [selectedBedroom, setSelectedBedroom]=useState("")
  const [selectedStatus, setSelectedStatus]=useState("")
  const [minPrice, setMinPrice]=useState("")
  const [maxPrice, setMaxPrice]=useState("")
  const [appliedFilter, setAppliedFilter]=useState({
    location:"",
    type: "",
    bedroom:"",
    status:"",
    minPrice:"",
    maxPrice:"",
  })

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

  

  let visibleProperties = filtersProperties

  if (priceError !=="") {
    visibleProperties=[]
  }

  return (
      <div className="bg-gray-100 min-h-screen w-full  flex flex-col justify-center  items-center p-4">
    <div className="max-w-sm flex flex-col justify-center">
          
    <div>
      <section className="w-full bg-[#0A1210] flex justify-between pl-3 py-8 text-white" >
        <div className=" flex flex-col">
          <h1 className="text-[24px]">Property Listings</h1>
        <p className="text-[14px]">Browse our curated collection of premium properties</p>
        <nav className="flex justify-start items-center gap-1 text-[18px] mt-2">
        <Link to="/">Home</Link>
        <img src={Caret} alt="Caret-right icon" className="w-3.5 h-3.25" />
        <Link to="/propertylist">Properties</Link>
        </nav>
        </div>
        

        <div className="relative top-16">
          <img src={House} alt="" className="w-50 h-20 m"/>
        </div>
        
    </section>
    </div>

    <section className="w-full p-5">
      <div className="opacity-60 mb-2">
        <div className="flex items-center gap-1 ">
          <img src={Gps} alt="location-icon" className="w-3.2 h-4" />
        <label htmlFor="state" className="block text-md">Location</label>
        </div>
      <select 
      name="state" 
      id="state"
      value={selectedLocation}
      onChange={e =>{setSelectedLocation(e.currentTarget.value)}}
      className="w-full border text-sm rounded-lg p-1 outline-0"
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
      <option value="jigawara">Jigawara</option>
      <option value="kaduna">Kaduna</option>
      <option value="kano">Kano</option>
      <option value="kastina">Kastina</option>
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

      <div className="flex items-center gap-4 opacity-60 mb-2">
  
        <div>
         <label htmlFor="types">Property Type</label>
        <select 
        name="types" 
        id="types"
        value={selectedType}
        onChange={e=>{setSelectedType(e.currentTarget.value)}}
        className="w-full border rounded-lg outline-0 p-1"
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
    <div>
      
      <label htmlFor="bedroom">No of Bedrooms</label>
      <select name="bedroom" id="bedroom"
      value={selectedBedroom}
      onChange={e=>{setSelectedBedroom(e.currentTarget.value)}}
      className="w-full border rounded-lg outline-0 p-1"
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
      <div className="opacity-60 mb-2">
        <label htmlFor="status" className="block">Listing Status</label>
      <select name="status" id="status"
      value={selectedStatus}
      onChange={e=>{setSelectedStatus(e.currentTarget.value)}}
      className="w-full border rounded-lg outline-0 p-1"
      >
        <option value="">Status</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
      </select>
      </div>

      <div className="opacity-60 mb-4">
        <label htmlFor="price" className="block">Price</label>
      <div className="flex items-center gap-2">
        <input 
      type="number" 
      id="minprice" 
      aria-label="Minimum Price"
      value={minPrice}
      placeholder="min"
      onChange={e=> {setMinPrice(e.currentTarget.value)}}
      className="w-full border rounded-lg outline-0 p-1"
      />

      <input 
      type="number" 
      id="maxprice"
      aria-label="Maximum Price"
      value={maxPrice}
      placeholder="max"
      onChange={e=>{setMaxPrice(e.currentTarget.value)}}
      className="w-full border rounded-lg outline-0 p-1"
      />
      {priceError && <p>{priceError}</p>}
      </div>

      </div>
      <div>
        <button type="button" onClick={handleFilter} className="w-full bg-[#1A3C34] hover:bg-[#1a3d2e] hover:cursor-pointer p-1 rounded-lg">Apply</button>
      </div>
     </section> 

    <div className="flex justify-between items-center mb-2 p-4">
       <p className="text-sm">Showing {visibleProperties.length} of {PropertyData.length}</p>

     <select name="default" id="default">
      <option value="">Sort by Default</option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
     </select>
    </div>
     
     
      {priceError !== "" ? (
        <div>
        <p>Please input a valid price range for properties to be shown.</p>
      </div>
     
    ):visibleProperties.length === 0 ? (
          <div>
           <p></p>
          </div>

    ):(
        <div className="grid grid-cols-1">
          
          {visibleProperties.map(i =>{
       return <PropertyList
        key={i.id}
        property={i}/>
      })}
      </div>)

    }
    </div>
    </div>

   
     
    
    


  )
}

export default Properties