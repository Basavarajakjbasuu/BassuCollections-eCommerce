import React from 'react';
import BestSeller from '../../components/BestSeller';
import CTA from '../../components/CTA';
import FeaturedProducts from '../../components/FeaturedProducts';
import OurServices from '../../components/OurServices';
import Slider from '../../components/Slider';
import Testimonial from '../../components/Testimonial';

const Home = () => {
	return (
		<div className="overflow-x-scroll scrollbar-hide ">
			<Slider className="" />
			<div className="flex px-7">
				<BestSeller />
				<FeaturedProducts />
			</div>
			<div className="flex md:px-7  flex-col md:flex-row">
				<Testimonial />
				<CTA />
				<OurServices />
			</div>
		</div>
	);
};

export default Home;
