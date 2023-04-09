import React, { useEffect, useState } from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';
import ManageCard from './ManageCard/ManageCard';

const ManageProduct = () => {
	const [products, setProducts] = useState([]);
	const [flag, setFlag] = useState(1);
	useEffect(() => {
		fetch(`https://specssphere-server.onrender.com/products`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, [flag]);
	return (
		<div className="flex flex-col min-h-screen md:flex-row">
			<div className=" md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<h1 className="mt-10 mb-2 text-4xl font-base uppercase">
						All Sunglasses
					</h1>
					<div className="flex justify-center">
						<div className=" bg-brand-1 h-px w-20 mb-10"></div>
					</div>
					<div className="container mx-auto">
						<div className="py-6">
							<div className="flex flex-wrap md:gap-10 xl:gap-28 lg:container mx-auto justify-center mb-32">
								{products.length ? (
									products.map((product) => (
										<ManageCard
											key={product._id}
											product={product}
											setFlag={setFlag}
										></ManageCard>
									))
								) : (
									<div className="w-full h-full fixed block top-0 left-0 opacity-50 bg-white  z-50">
										<div className=" flex justify-center items-center mb-40 h-screen">
											<div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default ManageProduct;
