import React, { useState } from 'react';
import Cl01 from '../../assets/products/shorts-1.jpg';
import Cl02 from '../../assets/products/shorts-2.jpg';
import Cl03 from '../../assets/products/sports-3.jpg';
import {
	MdOutlineAddShoppingCart,
	MdOutlineFavoriteBorder
} from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';
const images = [{ img1: Cl01 }, { img1: Cl03 }, { img1: Cl02 }];
const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);
	return (
		<section className="md:p-4 p-2 flex flex-col md:flex-row">
			<section className="flex flex-1">
				<div className="flex-1 w-full h-full">
					{images.map((item, i) => (
						<img
							src={item.img1}
							alt="index img"
							onClick={e => setSelectedImg(i)}
							key={i + i}
						/>
					))}
				</div>
				<div className="flex-[5] w-full h-full">
					<img src={images[selectedImg].img1} alt="selected img" />
				</div>
			</section>
			<section className="flex flex-col gap-3 flex-1 ">
				<h2 className="text-[#ff8f9c] font-semibold text-3xl uppercase text-center md:text-start">
					Shorts
				</h2>
				<span className="text-2xl font-semibold text-center md:text-start">
					₹ 499.00
				</span>
				<p className="text-sm text-center md:text-start">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. In alias
					odit praesentium.Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. In alias odit praesentium.
				</p>
				<div className="flex items-center gap-2 justify-center md:justify-start">
					<button
						onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
						className="border-zinc-100 border-2 px-2 font-semibold text-xl hover:bg-[#ff8f9c] hover:text-white rounded">
						-
					</button>
					{quantity}
					<button
						onClick={() => setQuantity(prev => prev + 1)}
						className="border-zinc-100 border-2 px-2 font-semibold text-xl hover:bg-[#ff8f9c] hover:text-white rounded">
						+
					</button>
				</div>
				<div className="flex items-center gap-x-2 bg-[#2879fc] max-w-max p-2 px-4 rounded cursor-pointer text-white ml-auto mr-auto md:ml-0">
					<MdOutlineAddShoppingCart /> ADD TO CART
				</div>
				<div className="flex items-center gap-x-4 flex-col md:flex-row">
					<div className="flex gap-x-2 items-center text-[#ff8f9c]/80 font-medium cursor-pointer  ">
						<MdOutlineFavoriteBorder className="text-xl" /> ADD TO WISH LIST
					</div>
					<div className="flex gap-x-2 items-center text-[#ff8f9c]/80 font-medium cursor-pointer">
						<FaBalanceScale className="text-xl" /> ADD TO COMPARE
					</div>
				</div>
				<section className="flex flex-col font-semibold text-sm max-w-max">
					<span>Vender: Polo</span>
					<span>Product Type: Shorts</span>
					<span>Tag: Shorts, Women, Men</span>
				</section>
				<section className="flex flex-col gap-1 font-medium">
					<span>DESCRIPTION</span>
					<hr className="w-52 border-gray-500" />
					<span>ADDITIONAL INFORMATION</span>
					<hr className="w-52 border-gray-500" />
					<span>FAQ</span>
				</section>
			</section>
		</section>
	);
};

export default Product;
