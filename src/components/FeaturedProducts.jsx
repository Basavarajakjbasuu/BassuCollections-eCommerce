import React from 'react';
import { featuredProducts } from './constants';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
	return (
		<div className="md:px-7 px-2 flex-[3]">
			<h2 className="text-xl font-semibold mb-2">New Products</h2>
			<hr />
			<div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-6">
				{featuredProducts.map(item => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
