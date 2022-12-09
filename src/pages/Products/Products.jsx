import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import List from '../../components/List';
const Products = () => {
	const categoryid = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState(null);
	const [showFilter, setShowFilter] = useState(false);
	return (
		<div className="flex px-4 mt-4">
			{/* LEFT */}
			{showFilter && (
				<div className="flex-1 sticky h-full top-14">
					<div className="mb-2">
						<h2 className="font-semibold text-lg capitalize mb-2">
							Products Categories
						</h2>
						<div className="flex items-center">
							<input type="checkbox" id="1" value={1} />
							<label htmlFor="1" className="ml-2">
								Shoes
							</label>
						</div>
						<div className="flex items-center">
							<input type="checkbox" id="1" value={1} />
							<label htmlFor="1" className="ml-2">
								Skirts
							</label>
						</div>
						<div className="flex items-center">
							<input type="checkbox" id="1" value={1} />
							<label htmlFor="1" className="ml-2">
								Coats
							</label>
						</div>
					</div>
					<div className="mb-4">
						<h2 className="font-semibold text-lg capitalize mb-2">
							Filter By Price
						</h2>
						<div className="flex items-center gap-2">
							<span>0</span>
							<input
								type="range"
								min={0}
								max={10000}
								onChange={e => setMaxPrice(e.target.value)}
							/>
							<span>{maxPrice}</span>
						</div>
					</div>
					<div className="">
						<h2 className="font-semibold text-lg capitalize mb-2">Sort By</h2>
						<div className="">
							<input
								type="radio"
								id="asc"
								value="asc"
								name="price"
								onChange={e => setSort('asc')}
							/>
							<label htmlFor="asc" className="ml-2">
								Price (Lowest first)
							</label>
						</div>
						<div className="">
							<input
								type="radio"
								id="dsc"
								value="dsc"
								name="price"
								onChange={e => setSort('dsc')}
							/>
							<label htmlFor="dsc" className="ml-2">
								Price (Higest first)
							</label>
						</div>
					</div>
				</div>
			)}
			{/* Right */}
			<div className="flex-[3]">
				<img
					src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt="no banner"
					className="w-full h-[150px] object-cover rounded mb-2"
					onClick={() => setShowFilter(!showFilter)}
				/>
				<List catId={categoryid} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	);
};

export default Products;
