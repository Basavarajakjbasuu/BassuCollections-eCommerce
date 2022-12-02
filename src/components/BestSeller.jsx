import React from 'react';
import BsCard from './BsCard';
import { bestSeller } from './constants';

const BestSeller = () => {
	return (
		<div className="hidden md:block flex-1">
			<h2 className="text-xl font-semibold mb-4">Best Seller</h2>
			<div className="">
				{bestSeller.map(item => (
					<BsCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default BestSeller;
