import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import BestSellers from './BestSellers/BestSellers';
import Reviews from './Reviews/Reviews';

const Home = () => {
	return (
		<div className="flex flex-col">
			<div className="">
				<Header></Header>
			</div>
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
