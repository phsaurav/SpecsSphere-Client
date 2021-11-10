import React from 'react';
import Header from '../../components/Header/Header';

const Home = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<Header></Header>
			<div className="bg-white h-screen w-1"></div>
		</div>
	);
};

export default Home;
