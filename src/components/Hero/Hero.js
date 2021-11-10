import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import './Hero.css';

const contents = [
	{
		key: 1,
		img: '/assets/covers/cover-1.jpg',
		pos: 'center',
	},
	{
		key: 2,
		img: '/assets/covers/cover-2.jpg',
		pos: 'center',
	},
	{
		key: 3,
		img: '/assets/covers/cover-3.jpg',
		pos: 'center',
	},
	{
		key: 4,
		img: '/assets/covers/cover-4.jpg',
		pos: 'center',
	},
	{
		key: 5,
		img: '/assets/covers/cover-5.jpg',
		pos: 'top',
	},
	{
		key: 6,
		img: '/assets/covers/cover-6.jpg',
		pos: 'top',
	},
	{
		key: 7,
		img: '/assets/covers/cover-7.jpg',
		pos: 'top',
	},
	{
		key: 8,
		img: '/assets/covers/cover-8.jpg',
		pos: 'top',
	},
	{
		key: 9,
		img: '/assets/covers/cover-9.jpg',
		pos: 'center',
	},
];

const Hero = () => {
	return (
		<div className="relative w-full">
			<Slider
				autoplay="7000"
				infinite="true"
				classNames="buttonDisabled previousButton disabled "
				className="slider-wrapper"
				previousButton=""
				nextButton=""
			>
				{contents.map((content) => (
					<div
						className="absolute top-0 w-full"
						key={content.key}
						style={{
							backgroundImage: `url(${content.img})`,
							backgroundSize: 'cover',
							backgroundPosition: `${content.pos}`,
							backgroundRepeat: 'no-repeat',
							height: '555px',
						}}
					></div>
				))}
			</Slider>
			<div>
				<span
					id="blackOverlay"
					className="w-full absolute bg-center opacity-60 bg-gradient-to-t from-black top-0 left-0"
					style={{ height: '555px' }}
				></span>
			</div>
			<div
				className=" w-full absolute top-0 mx-auto z-50 flex flex-col justify-end items-center"
				style={{ height: '555px' }}
			>
				<p className="text-white text-xl w-72 font-light border-2 border-white mb-2 py-1 ">
					Luxery Eyeware Collection
				</p>
				<Link
					to="home#services"
					className=" cursor-default bg-white  text-black flex items-center text-xl w-48 mb-8 pl-1 pt-1 pb-1 justify-center mt-3 font-medium uppercase border-2 border-white transition duration-500 ease-in-out transform hover:shadow-2xl hover:bg-opacity-0 hover:text-white"
				>
					Shop Now!
				</Link>
			</div>
		</div>
	);
};

export default Hero;
