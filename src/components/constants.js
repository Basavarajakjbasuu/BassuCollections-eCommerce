import clothes1 from '../assets/products/shoe-2.jpg';
import clothes2 from '../assets/products/shoe-2_1.jpg';
import shirt1 from '../assets/products/shirt-1.jpg';
import shirt2 from '../assets/products/shirt-2.jpg';

import bs1 from '../assets/products/1.jpg';
import bs2 from '../assets/products/2.jpg';
import bs3 from '../assets/products/3.jpg';
import bs4 from '../assets/products/4.jpg';

export const featuredProducts = [
	{
		id: 1,
		img1: clothes1,
		img2: clothes2,
		isNew: false,
		isDiscount: true,
		name: 'Jacket',
		desc: 'Mens Winter Leathers Jackets',
		oldPrice: '799',
		newPrice: '399'
	},
	{
		id: 2,
		img1: shirt1,
		img2: shirt2,
		isNew: false,
		name: 'Jacket',
		desc: 'Mens Winter Leathers Jackets',
		oldPrice: '799',
		newPrice: '399'
	},
	{
		id: 3,
		img1: clothes1,
		img2: clothes2,
		isNew: true,
		name: 'Jacket',
		desc: 'Mens Winter Leathers Jackets',
		oldPrice: '799',
		newPrice: '399'
	}
];

export const bestSeller = [
	{
		id: 1,
		img: bs1,
		title: 'baby fabric shoes',
		oldPrice: 899,
		newPrice: 599
	},
	{
		id: 2,
		img: bs2,
		title: "men's hoodies t-shirt",
		oldPrice: 799,
		newPrice: 499
	},
	{
		id: 3,
		img: bs3,
		title: 'girls t-shirt',
		oldPrice: 899,
		newPrice: 399
	},
	{
		id: 4,
		img: bs4,
		title: 'woolen hat for men',
		oldPrice: 399,
		newPrice: 599
	}
];
