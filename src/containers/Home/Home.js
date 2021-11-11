import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import BestSellers from './BestSellers/BestSellers';
import Reviews from './Reviews/Reviews';

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:min-h-screen md:w-80 xl:w-96">
				<Header></Header>
			</div>
			<div className="hidden md:block bg-white h-screen w-1"></div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<Hero></Hero>
					<h1 className="mt-10 mb-2 text-4xl font-base">
						Best Sellers
					</h1>
					<div className="flex justify-center">
						<div className=" bg-brand-1 h-px w-20 mb-10"></div>
					</div>
					<BestSellers></BestSellers>
					<Reviews></Reviews>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
