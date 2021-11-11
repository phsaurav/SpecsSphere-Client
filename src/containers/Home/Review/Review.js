import React from 'react';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Review = ({ singleReview }) => {
	const { name, img, email, review, star } = singleReview;
	return (
		<div className="pt-20 pb-10  select-none">
			<div
				className="bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 mx-auto"
				style={{ width: '420px', height: '350px' }}
			>
				<div className="w-full pt-1 pb-5">
					<div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
						<img src={img} alt="" />
					</div>
				</div>
				<div className="w-full">
					<p className="text-md text-indigo-500 font-bold text-center">
						{name}
					</p>
					<p className="text-xs text-gray-500 text-center mb-2">
						{email}
					</p>
				</div>
				<div className="flex justify-center text-yellow-400 w-full">
					<Rating
						emptySymbol={<AiOutlineStar></AiOutlineStar>}
						fullSymbol={<AiFillStar></AiFillStar>}
						fractions={2}
						initialRating={star}
						readonly
					/>
				</div>
				<div className="w-full mb-5">
					<div className="text-3xl text-indigo-500 text-left leading-tight h-3">
						“
					</div>
					<p
						className="text-sm text-gray-600 text-center px-5"
						style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
					>
						{review}
					</p>
					<div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3 pb-10">
						”
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
