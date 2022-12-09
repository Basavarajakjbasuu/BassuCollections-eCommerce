import React, { useState } from 'react';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1);
	};
	const data = [
		{
			id: 1,
			subTitle: 'Trending Item',
			t1: "WOMEN'S",
			t2: 'LATEST ',
			t3: 'FASHION SALE',
			img: banner1,
			amount: 789
		},
		{
			id: 2,
			subTitle: 'Trending Accessories',
			t1: 'MODERN ',
			t2: 'SUNGLASSES',
			img: banner2,
			amount: 849
		},
		{
			id: 3,
			subTitle: 'Sale Offer',
			t1: 'NEW FASHION',
			t2: 'SUMMER SALE',
			img: banner3,
			amount: 689
		}
	];
	return (
		<div className="flex w-[300vw] md:gap-x-20 gap-x-4 md:p-7 p-2 ">
			{data.map(item => (
				<div
					className="w-screen  transition-all duration-500 ease-linear"
					key={item.id}
					style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
					<img
						src={item.img}
						alt="banner"
						className="rounded-2xl  h-[400px] w-full object-cover object-right "
					/>
					<div className="absolute  top-16 left-10 rounded md:top-0 md:left-20 bg-white/[0.8] md:bg-transparent p-8 w-[80%] md:max-w-none">
						<h2 className="md:text-3xl text-xl font-semibold text-[#ff8f9c] tracking-wider capitalize">
							{item.subTitle}
						</h2>
						<h1 className="md:text-5xl text-3xl font-bold tracking-wide md:mt-4 mt-2 truncate">
							{item.t1} <br />
							{item.t2} <br />
							{item.t3}
						</h1>
						<p className="md:text-2xl text-xl font-semibold text-[#999] md:mt-3 mt-1">
							Starting at ₹ {item.amount}.00
						</p>
						<button className="md:mt-4 mt-1 bg-[#ff8f9c] text-white px-3 py-1 rounded">
							Shop now
						</button>
					</div>
				</div>
			))}

			<div className="hidden  w-24 absolute left-0 right-0 bottom-48 mx-auto md:flex text-3xl gap-x-2">
				<div
					className="border-2 rounded bg-transparent cursor-pointer border-[#999]"
					onClick={prevSlide}>
					<BsArrowLeftShort />
				</div>
				<div
					className="border-2 rounded bg-transparent cursor-pointer border-[#999]"
					onClick={nextSlide}>
					<BsArrowRightShort />
				</div>
			</div>
		</div>
	);
};

export default Slider;
