<<<<<<< HEAD
import React from "react";
import { Link } from "react-router";
import notFound from "../assets/images/NotFound.png";
import exclamation from "../assets/images/ErrorExclamation.svg";

interface NotFoundProps {
	onReset?: () => void;
}

const NotFound = ({ onReset }: NotFoundProps) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<img src={notFound} />
			<div className="flex gap-2 items-center">
				<img src={exclamation} className="" />
				<p className="text-red-500 font-manrope text-2xl">
					We couldn't find any properties matching your search criteria
				</p>
			</div>
			<p className="text-[#5C5B5B] font-inter text-lg mt-2.5">
				Try adjusting your filters
			</p>

			{onReset ? (
				<button
					onClick={onReset}
					className="mt-7 bg-[#1A3C34] py-3 px-6 rounded-2xl text-white text-md cursor-pointer font-manrope"
				>
					Clear Filters
				</button>
			) : (
				<Link
					to="/properties"
					className="mt-7 bg-[#1A3C34] py-3 px-6 rounded-2xl text-white text-md cursor-pointer font-manrope"
				>
					Go back to Properties
				</Link>
			)}

		</div>
	);
};

export default NotFound;
=======
>>>>>>> property-list
