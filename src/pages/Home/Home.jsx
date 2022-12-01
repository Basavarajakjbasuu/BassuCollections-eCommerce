import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts';
import Slider from '../../components/Slider';

const Home = () => {
	return (
		<div className="overflow-x-scroll scrollbar-hide ">
			<Slider className="" />
			<FeaturedProducts type="featured" />
			<FeaturedProducts type="trending" />
		</div>
	);
};

export default Home;
