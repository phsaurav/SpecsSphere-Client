import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
	const [reviews] = useReviews();
	const responsive = {
		desktop: {
			breakpoint: { max: 5000, min: 1900 },
			items: 3,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1900, min: 1600 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 1600, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div className="cursor-default ">
			<div className="h-full w-full mx-auto py-20 bg-gray-200">
				<Carousel
					swipeable={true}
					draggable={true}
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={5000}
					transitionDuration={500}
					containerClass="carousel-container"
					itemClass="carousel-item-padding-40-px"
					removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
					className="lg:container"
				>
					{reviews.length ? (
						reviews.map((singleReview) => (
							<Review
								key={singleReview._id}
								singleReview={singleReview}
							></Review>
						))
					) : (
						<div className="w-full h-full fixed block top-0 left-0 opacity-50 bg-white  z-50">
							<div className=" flex justify-center items-center mb-40 h-screen">
								<div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
							</div>
						</div>
					)}
				</Carousel>
			</div>
		</div>
	);
};

export default Reviews;
