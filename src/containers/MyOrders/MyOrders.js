import React, { useEffect, useState } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';
import OrderCard from '../../components/OrderCard/OrderCard';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
	const { user } = useAuth();
	const [orders, setOrders] = useState([]);
	const [flag, setFlag] = useState(1);

	useEffect(() => {
		fetch(`https://specssphere-server.onrender.com/order/byemail`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify([user.email]),
		})
			.then((res) => res.json())
			.then((orders) => {
				setOrders(orders);
			});
	}, [user.email, flag]);

	return (
		<div className="flex flex-col md:flex-row bg-white">
			<div className=" md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex flex-col md:min-h-screen justify-between w-full">
				<div>
					<p className=" mt-10 mb-2 text-4xl font-base">My Orders</p>
					<div className="flex justify-center">
						<div className=" bg-brand-1 h-px w-20 mb-10"></div>
					</div>
					<div>
						<div className=" mb-20">
							{orders.length ? (
								orders.map((order) => (
									<OrderCard
										key={order._id}
										order={order}
										setFlag={setFlag}
									></OrderCard>
								))
							) : (
								<div>
									<h1 className=" text-center text-3xl text-brand-1 opacity-50 uppercase pt-10  font-semibold ">
										You Don't have any order!!
									</h1>
									<div className="w-full h-full z-50">
										<div
											className=" flex justify-center items-center mb-40"
											style={{ height: '60vh' }}
										>
											<div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MyOrders;
