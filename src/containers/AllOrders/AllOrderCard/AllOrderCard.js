import React from 'react';
import { CgClose } from 'react-icons/cg';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import useProduct from '../../../hooks/useProduct';

const AllOrderCard = ({ order, setFlag, stateFlag, setStateFlag }) => {
	const { _id, name, email, number, img, productId } = order;
	const [product] = useProduct(productId);
	const handleDelete = () => {
		if (window.confirm('Are you Sure?')) {
			fetch(`http://localhost:5000/order/${_id}`, {
				method: 'DELETE',
			})
				.then((res) => res.text()) // or res.json()
				.then((res) => {
					setFlag(_id);
				});
		}
	};
	const handleStatus = () => {
		fetch(`http://localhost:5000/status/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					setStateFlag(stateFlag + 1);
				}
			});
	};
	return (
		<div>
			<div className="container mx-auto w-5/6 mb-10">
				<div className="flex items-center bg-white  mx-4 border-b-2  md:mx-auto ">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-between items-center w-full lg:px-10">
						<div className="flex justify-center gap-2 flex-col lg:flex-row  items-center px-4 py-6">
							<img
								className="w-12 h-12 rounded-full object-cover md:mr-4 shadow"
								src={img}
								alt="avatar"
							/>
							<div className="flex flex-col items-center lg:items-start">
								<div className="">
									<h2 className="text-lg font-semibold text-gray-900 -mt-1">
										{name}
									</h2>
								</div>
								<p className="text-bluegray-600 text-sm mt-1">
									{email}
								</p>
								<p className="text-bluegray-600 text-sm mt-1">
									{number}
								</p>
							</div>
						</div>
						<div className="flex flex-col text-left items-center lg:mr-auto lg:ml-20  lg:items-start mr-1 ">
							<h1 className="xl:text-lg text-bluegray-600">
								{product.title}
							</h1>
							<div className="flex flex-col items-center  md:items-start text-bluegray-500 text-sm">
								<div className="flex items-center">
									<div className="flex justify-center mt-1 text-yellow-400 w-full">
										<Rating
											emptySymbol={
												<AiOutlineStar></AiOutlineStar>
											}
											fullSymbol={
												<AiFillStar></AiFillStar>
											}
											fractions={2}
											initialRating={product.star}
											readonly
										/>
									</div>
								</div>
								<div className="flex items-center">
									<h1 className="text-gray-600 font-semibold text-base">
										${product.price}.00
									</h1>
								</div>
							</div>
						</div>
						<div className="my-5 flex justify-center ml-3">
							{order.status === 'pending' ? (
								<button
									className=" border-brand-9 transition duration-500 ease-in-out hover:bg-brand-9 hover:text-white  border-2 rounded-lg mr-5 p-1 text-brand-9  text-xs uppercase"
									onClick={handleStatus}
								>
									{order.status}
								</button>
							) : (
								<button className=" border-green-400 border-2  text-green-400 rounded-lg mr-5 p-1 text-b  text-xs uppercase">
									{order.status}
								</button>
							)}
							<button
								className=" border-brand-12 transition duration-500 ease-in-out hover:bg-brand-12 text-brand-12 hover:text-white border-2 rounded-lg mr-5 p-1"
								onClick={handleDelete}
							>
								<CgClose className=" text-2xl" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllOrderCard;
