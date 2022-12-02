import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ item }) => {
	return (
		<Link to={`/products/${item.id}`}>
			<div className="w-full h-full p-2 md:p-0  flex flex-col border-[1px] shadow-md rounded-lg hover:shadow-2xl">
				<div className="w-full md:h-[200px] h-[300px] overflow-hidden relative group">
					{item.isDiscount && (
						<span className="absolute top-4 z-40 left-2 bg-green-600 text-white text-sm px-2 rounded">
							20%
						</span>
					)}

					{item.isNew && (
						<span className="absolute z-40 bg-[#ff8f9c] text-white  w-24 -left-6 top-3 text-center -rotate-45">
							New
						</span>
					)}
					<img
						src={item.img1}
						alt=""
						className="w-full h-full object-cover absolute z-10 p-2"
					/>
					<img
						src={item.img2}
						alt=""
						className="w-full h-full object-cover p-2 absolute group-hover:z-20 hover:scale-110 duration-500"
					/>
				</div>
				<div className="px-6">
					<h2 className="text-[#ff8f9c] text-base uppercase">{item.name}</h2>
					<p className="text-gray-500/[0.9] text-base my-2 font-light">
						{item.desc}
					</p>
					<div className="flex gap-2 mb-3">
						<h3 className="line-through text-gray-500 ">₹ {item.oldPrice}</h3>
						<h3 className="text-black font-semibold">₹ {item.newPrice}.00</h3>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
