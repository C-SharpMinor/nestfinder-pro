// import React from 'react'
import { Link } from "react-router";
import { useState } from "react";
import PropertyList from "../components/PropertyList";
import { PropertyData } from "../components/PropertyData";
import NotFound from "./NotFound";

const Properties = () => {
	const [selectedLocation, setSelectedLocation] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [selectedBedroom, setSelectedBedroom] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [appliedFilter, setAppliedFilter] = useState({
		location: "",
		type: "",
		bedroom: "",
		status: "",
		minPrice: "",
		maxPrice: "",
	});

	const handleFilter = () => {
		setAppliedFilter({
			location: selectedLocation,
			type: selectedType,
			bedroom: selectedBedroom,
			status: selectedStatus,
			minPrice: minPrice,
			maxPrice: maxPrice,
		});
	};

	// const filteredLocation= selectedLocation === ""?PropertyData: PropertyData.filter( p =>{
	//   p.location.toLowerCase().includes(selectedLocation)
	// })

	let priceError = "";

	if (
		(minPrice !== "" && Number(minPrice) < 0) ||
		(maxPrice !== "" && Number(maxPrice) < 0)
	) {
		priceError = "Price cannot be less than 0";
	} else if (
		minPrice !== "" &&
		maxPrice !== "" &&
		Number(minPrice) > Number(maxPrice)
	) {
		priceError = "Minimum Price cannot be greater than maximum Price";
	}

	const filtersProperties = PropertyData.filter((p) => {
		const filtersLocation =
			appliedFilter.location === "" ||
			p.location.toLowerCase().includes(appliedFilter.location);

		const filtersType =
			appliedFilter.type === "" || p.type.toLowerCase() === appliedFilter.type;

		const filtersStatus =
			appliedFilter.status === "" ||
			p.status.toLowerCase() === appliedFilter.status;

		const filtersBedroom =
			appliedFilter.bedroom === "" ||
			p.bedroom === Number(appliedFilter.bedroom);

		const filtersMinPrice =
			appliedFilter.minPrice === "" ||
			p.price >= Number(appliedFilter.minPrice);

		const filtersMaxPrice =
			appliedFilter.maxPrice === "" ||
			p.price <= Number(appliedFilter.maxPrice);

		return (
			filtersLocation &&
			filtersType &&
			filtersStatus &&
			filtersBedroom &&
			filtersMinPrice &&
			filtersMaxPrice
		);
	});

	let visibleProperties = filtersProperties;

	if (priceError !== "") {
		visibleProperties = [];
	}


  const handleResetFilters= ()=>{
    setSelectedLocation("");
	setSelectedType("");
	setSelectedBedroom("");
	setSelectedStatus("");
	setMinPrice("");
	setMaxPrice("");
	setAppliedFilter({location: "",
		type: "",
		bedroom: "",
		status: "",
		minPrice: "",
		maxPrice: "",
	});
  }


	return (
		<div className="bg-gray-100 max-w-md md:max-w-3xl lg:max-w-7xl p-3">
			<div className="bg-[#0A1210] w-full md:h-[418px]">
				<section className="p-3 text-start text-white">
					<h1 className="text-[24px] md:text-[72px]">Property Listings</h1>
					<p className="text-[14px] md:text-[18px]">
						Browse our curated collection of premium properties
					</p>
					<Link to="" className="text-[18px] md:text-[]">
						Home
					</Link>
					<Link to="./propertylist" className="text-[18px]">
						Properties
					</Link>
				</section>
			</div>

			<section>
				<label htmlFor="state">Location</label>
				<select
					name="state"
					id="state"
					value={selectedLocation}
					onChange={(e) => {
						setSelectedLocation(e.currentTarget.value);
					}}
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

				<label htmlFor="types">Property Type</label>
				<select
					name="types"
					id="types"
					value={selectedType}
					onChange={(e) => {
						setSelectedType(e.currentTarget.value);
					}}
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

				<label htmlFor="bedroom">No of Bedrooms</label>
				<select
					name="bedroom"
					id="bedroom"
					value={selectedBedroom}
					onChange={(e) => {
						setSelectedBedroom(e.currentTarget.value);
					}}
				>
					<option value="">Bedrooms</option>
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<label htmlFor="status">Listing Status</label>
				<select
					name="status"
					id="status"
					value={selectedStatus}
					onChange={(e) => {
						setSelectedStatus(e.currentTarget.value);
					}}
				>
					<option value="">Status</option>
					<option value="sale">For Sale</option>
					<option value="rent">For Rent</option>
				</select>
				<label htmlFor="price">Price</label>
				<input
					type="number"
					id="minprice"
					aria-label="Minimum Price"
					value={minPrice}
					placeholder="min"
					onChange={(e) => {
						setMinPrice(e.currentTarget.value);
					}}
				/>

				<input
					type="number"
					id="maxprice"
					aria-label="Maximum Price"
					value={maxPrice}
					placeholder="max"
					onChange={(e) => {
						setMaxPrice(e.currentTarget.value);
					}}
				/>
				{priceError && <p>{priceError}</p>}

				<div>
					<button type="button" onClick={handleFilter}>
						Apply
					</button>
				</div>
			</section>

			<p>
				Showing {visibleProperties.length} of {PropertyData.length}
			</p>

			{priceError !== "" ? (
				<div>
					<p>Please input a valid price range for properties to be shown.</p>
				</div>
			) : visibleProperties.length === 0 ? (
        // Added this for if no properties matched the filter, for any reason other than an invalid price
				<NotFound onReset={handleResetFilters} />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{visibleProperties.map((i) => {
						return <PropertyList key={i.id} property={i} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Properties;
