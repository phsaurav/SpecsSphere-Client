import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';

const Dashboard = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:min-h-screen md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

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
