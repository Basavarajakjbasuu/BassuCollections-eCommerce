import React from 'react';
import { IoSearchSharp, IoPersonOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import logo from '../assets/ind.png';
const Navbar = () => {
	return (
		<div className="w-full h-14 px-4 py-2 sticky top-0 bg-white z-50 drop-shadow-sm">
			<div className="flex items-center justify-between">
				{/* Left */}
				<div className="md:flex items-center gap-2 hidden">
					<div className="flex items-center gap-1">
						<img src={logo} alt="ind logo" className="w-6 h-6" />
						<MdOutlineKeyboardArrowDown />
					</div>
					<div className="flex items-center gap-1">
						<span>IND</span>
						<MdOutlineKeyboardArrowDown />
					</div>
					<div className="">
						<Link to="/products/1"> Women </Link>
					</div>
					<div className="">
						<Link to="/products/2"> Men </Link>
					</div>
					<div className="">
						<Link to="/products/3"> Children </Link>
					</div>
				</div>
				{/* Middle */}
				<div className="font-semibold text-3xl md:text-2xl">
					<Link to="/">BASSUSTORE</Link>
				</div>
				{/* Right */}
				<div className=" flex gap-2 items-center text-base">
					<div className="md:flex items-center gap-2 font-normal hidden">
						<div className="">
							<Link to="/">Homepage</Link>
						</div>
						<div className="">
							<Link to="/">About</Link>
						</div>
						<div className="">
							<Link to="/">Contact</Link>
						</div>
						<div className="">
							<Link to="/">Stores</Link>
						</div>
					</div>
					<div className="flex gap-1 text-3xl md:text-xl text-[#777] cursor-pointer">
						<div className="relative">
							<HiOutlineShoppingCart />
							<span className="text-sm font-semibold w-5 h-5 rounded-full bg-[#2879fe] text-white absolute -top-2 -right-2 flex items-center justify-center">
								0
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
