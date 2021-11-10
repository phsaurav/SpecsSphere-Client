import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<Header></Header>
			<div className="hidden md:block bg-white h-screen w-1"></div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<Hero></Hero>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
