import React from 'react';
import Card from '../../../components/Card/Card';
import useProducts from '../../../hooks/useProducts';

const BestSellers = () => {
	const [products] = useProducts();
	return (
		<div className="container mx-auto">
			<div className="py-6">
				<div className="flex flex-wrap md:gap-10 xl:gap-28 lg:container mx-auto justify-center mb-32">
					{products.length ? (
						products
							.slice(0, 6)
							.map((product) => (
								<Card
									key={product._id}
									product={product}
								></Card>
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
	);
};

export default BestSellers;
