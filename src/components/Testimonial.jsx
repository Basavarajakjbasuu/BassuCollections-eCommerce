import React from 'react';
import Quotes from '../assets/quotes.svg';
import testimonial from '../assets/testimonial-1.jpg';
const Testimonial = () => {
	return (
		<div className="flex-1 mt-4 p-2">
			<h2 className="capitalize mb-2 font-bold">testimonial</h2>
			<hr />
			<div className="mt-4 p-8 m-4 flex items-center justify-center flex-col border-[1px] rounded-xl">
				<img
					src={testimonial}
					alt="testimonial"
					className="w-20 rounded-full h-20 object-cover"
				/>
				<h2 className="uppercase font-bold mt-2 text-gray-500">Angel Priya</h2>
				<p>CEO & Founder invision</p>
				<img src={Quotes} alt="quotes" className="w-8 my-4" />
				<p className="text-center">
					Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
					amet.
				</p>
			</div>
		</div>
	);
};

export default Testimonial;
