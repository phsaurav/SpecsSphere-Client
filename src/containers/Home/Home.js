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
					<div
						className="w-screen h-72 bg-gray-600  bg-no-repeat"
						style={{
							backgroundBlendMode: 'multiply',
							backgroundSize: 'cover',
							backgroundPosition: 'bottom',
							backgroundImage: `url(https://i.ibb.co/YR5K2ZP/sai-kiran-anagani-83z-Rh-Eh-FMfo-unsplash.jpg)`,
							width: '100%',
						}}
					>
						<div className=" p-10 pt-10  pb-20  flex  flex-col  flex-wrap  justify-center  content-center">
							<div className=" my-1 mt-5 tracking-wide text-2xl md:text-3xl font-semibold  text-white  antialiased  text-center">
								Join The Exclusive Club
							</div>
							<div className=" my-1 tracking-wider p-0 font-light text-base md:text-xl  text-white  antialiased  text-center">
								See our latest collections & exclusive offers
								before the crowd!
							</div>
							<div className=" mt-3 w-80 md:w-96 mx-auto  flex  flex-row  flex-wrap">
								<input
									type="text"
									className=" text-gray-600  w-2/3  p-2 px-5  rounded-l-lg"
									placeholder="Your Email"
								/>
								<div className=" p-2  w-1/3  bg-brand-9  rounded-r-lg  text-white hover: ">
									Subscribe
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
