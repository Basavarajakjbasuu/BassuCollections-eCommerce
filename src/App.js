import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/product/Product';
import Products from './pages/Products/Products';

const Layout = () => (
	<div>
		<Navbar />
		<Outlet />
		<Footer />
	</div>
);

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Home />
// 	},
// 	{
// 		path: '/products/:id',
// 		element: <Products />
// 	},
// 	{
// 		path: '/product/:id',
// 		element: <Product />
// 	}
// ]);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/products/:id',
				element: <Products />
			},
			{
				path: '/product/:id',
				element: <Product />
			}
		]
	}
]);
const App = () => {
	return (
		<div className="font-poppins">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
