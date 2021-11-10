import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Dashboard = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<Header></Header>
			<div className="bg-white h-screen w-1"></div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<h1>This is Dashboard</h1>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Dashboard;
