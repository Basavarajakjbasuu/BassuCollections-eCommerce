import React from 'react';
import payment from '../assets/pay.png';

const Footer = () => {
	return (
		<div className="md:mx-24 my-10 mx-8">
			<div className="flex gap-9 flex-col md:flex-row">
				<div className="flex flex-1 justify-between items-center">
					<div className="flex-1 flex  flex-col gap-2	">
						<h1 className="font-bold	text-lg">Categories</h1>
						<span>Women</span>
						<span>Men</span>
						<span>Shoes</span>
						<span>Accessories</span>
						<span>New Arrivals</span>
					</div>
					<div className="flex-1 flex flex-col gap-2	">
						<h1 className="font-bold	text-lg">Links</h1>
						<span>FAQ</span>
						<span>Pages</span>
						<span>Stores</span>
						<span>Compare</span>
						<span>Cookies</span>
					</div>
				</div>
				<div className="flex-1 text-justify">
					<h1 className="hidden md:block font-bold	text-lg">About</h1>
					<span className="">
						Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
						amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
						ut labore etdolore.
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center mt-8">
					<span className="text-[#2829f2] font-bold text-xl">BassuStore</span>
					<span className="font-semibold ml-2">
						© Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div className="hidden md:block w-80 h-5">
					<img src={payment} alt="" className=" object-cover" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
