import React from 'react';
import { ourServices } from './constants';

const OurServices = () => {
	return (
		<div className="flex-1 mt-4 p-2">
			<h2 className="text-lg font-bold">Our Services</h2>
			<hr className="mt-2" />
			<div className="border-[1px] md:m-4 mx-10 my-4 rounded-xl p-4 grid md:grid-cols-1 sm:grid-cols-2 	 items-center justify-center">
				{ourServices.map(item => (
					<div
						className="flex items-center my-4 group cursor-pointer "
						key={item.id}>
						<item.icon className="text-3xl group-hover:text-black  text-[#ff8f9c]" />
						<div className="ml-3">
							<h2 className="text-sm font-semibold text-black/50">
								{item.title}
							</h2>
							<p className="text-xs text-gray-700">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurServices;
