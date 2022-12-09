import React from 'react';
import Banner from '../assets/cta-banner.jpg';
const CTA = () => {
	let date = new Date();
	let month = date.getMonth();
	const getSeason = month => {
		if (1 <= month && month <= 4) {
			return 'summer';
		}
		if (5 <= month && month <= 8) {
			return 'autumn';
		}
		if (9 <= month && month <= 12) {
			return 'winnter';
		}
		return 'winter';
	};
	let season = getSeason(month);
	return (
		<div className="flex-[2] mt-2 md:p-6 p-2 relative w-full ">
			<img
				src={Banner}
				alt="banner"
				className="rounded-lg w-full min-h-[300px] object-cover"
			/>
			<div className="absolute top-14	0 left-28 md:top-[20%] md:left-[30%] md:p-4 p-2 text-center rounded bg-white/[0.7] md:w-[250px] md:h-[250px] w-[200px] ">
				<button className="bg-black text-white px-2 py-1 rounded mt-4">
					25% OFF
				</button>
				<h2 className="text-2xl font-bold mt-3 capitalize">
					{season} Collection
				</h2>
				<p className="text-lg text-[#999]">Starting @ ₹499.00</p>
				<button className="text-[#999] font-bold text-lg uppercase mt-2">
					Shop Now
				</button>
			</div>
		</div>
	);
};

export default CTA;
