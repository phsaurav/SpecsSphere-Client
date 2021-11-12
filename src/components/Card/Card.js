import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
	const { _id, title, img, type, brand, price, star } = product;
	return (
		<div>
			<div className="flex flex-col w-96 bg-white overflow-hidden h-96 justify-center mx-auto transition duration-500 ease-in-out hover:shadow-md ">
				<Link to={`/order/${_id}`}>
					<div
						className="bg-contain h-44 bg-no-repeat relative mx-auto"
						style={{
							backgroundImage: `url(${img})`,
						}}
					>
						<div className="flex flex-col justify-center ">
							<div className="h-96 transition duration-500 ease-in-out hover:opacity-90 opacity-0">
								<div className="bg-brand-1 text-white h-10   absolute bottom-0 w-full pt-2 ">
									Order Now
								</div>
							</div>
						</div>
					</div>

					<div className="p-4 flex flex-col justify-center text-center">
						<p className="mt-2 text-gray-600 text-xs tracking-widest uppercase">
							{brand}
						</p>
						<h1 className="text-gray-900 font-bold text-2xl">
							{title}
						</h1>
						<p className="text-gray-600 text-sm">{type}</p>
						<div className="flex justify-center mt-1 text-yellow-400 w-full">
							<Rating
								emptySymbol={<AiOutlineStar></AiOutlineStar>}
								fullSymbol={<AiFillStar></AiFillStar>}
								fractions={2}
								initialRating={star}
								readonly
							/>
						</div>
						<div className="flex item-center justify-center">
							<h1 className="text-gray-700 font-semibold text-base">
								${price}.00
							</h1>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Card;
