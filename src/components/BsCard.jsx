import React from 'react';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';

const BsCard = ({ item }) => {
	return (
		<div className="min-w-min flex">
			<div className="w-20 mb-3 ">
				<img src={item.img} alt="" className="rounded-lg" />
			</div>
			<div className="ml-4 flex flex-col items-start justify-center">
				<h2 className="capitalize">{item.title}</h2>
				<div className="flex gap-1 text-[#f6a355] my-1">
					<AiTwotoneStar />
					<AiTwotoneStar />
					<AiTwotoneStar />
					<AiTwotoneStar />
					<AiOutlineStar />
				</div>
				<div className="flex gap-2 mb-3 text-sm">
					<h3 className="line-through text-gray-500 ">₹ {item.oldPrice}</h3>
					<h3 className="text-black font-semibold">₹ {item.newPrice}.00</h3>
				</div>
			</div>
		</div>
	);
};

export default BsCard;
