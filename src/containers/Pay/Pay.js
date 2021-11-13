import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';

const Pay = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:min-h-screen md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex min-h-screen flex-col justify-between w-full">
				<div>
					<p className=" mt-10 mb-2 text-4xl font-base">Payment</p>
					<div className="flex justify-center">
						<div className=" bg-brand-1 h-px w-20 mb-10"></div>
					</div>
					<p className="  w-5/6 mt-10 mb-2 text-4xl font-base border-2 border-black py-2 container mx-auto uppercase">
						Payment system coming soon
					</p>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Pay;
