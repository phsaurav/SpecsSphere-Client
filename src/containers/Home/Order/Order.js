import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Hero from '../../../components/Hero/Hero';
import useProduct from '../../../hooks/useProduct';
import Rating from 'react-rating';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { HashLink } from 'react-router-hash-link';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Order = () => {
	const { id } = useParams();
	const [product] = useProduct(id);
	const { title, img, type, Brand, price, star } = product;
	const { handleSubmit, register, reset } = useForm();
	const { user } = useAuth();
	const history = useHistory();

	const onSubmit = (data) => {
		data.productId = id;
		data.img = user?.photoURL;
		data.status = 'pending';
		fetch('https://specssphere.herokuapp.com/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert(
						'Thank you for your Order!! \nYour Order will be shipped very soon.'
					);
					reset();
					history.push('/explore');
				}
			});
	};

	return (
		<div className="flex flex-col">
			<div className="">
				<Header></Header>
			</div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<Hero></Hero>
					<p className=" mt-10 mb-2 text-4xl font-base">{type}</p>
					<div className="flex justify-center">
						<div className=" bg-brand-1 h-px w-20 mb-10"></div>
					</div>
					<div className="flex flex-col w-96 bg-white justify-center mx-auto">
						<div className="">
							<div
								className="bg-contain h-44 bg-no-repeat relative mx-auto"
								style={{
									backgroundImage: `url(${img})`,
								}}
							></div>

							<div className="pb-4 flex flex-col justify-center text-center">
								<p className="mt-2 text-gray-600 text-xs tracking-widest uppercase">
									{Brand}
								</p>
								<h1 className="text-gray-900 font-bold text-2xl">
									{title}
								</h1>
								<div className="flex justify-center mt-1 text-yellow-400 w-full">
									<Rating
										emptySymbol={
											<AiOutlineStar></AiOutlineStar>
										}
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
						</div>
					</div>
					<div className="flex justify-center mt-3 ml-1 pb-20">
						<Link to="/explore">
							<button className="w-32 flex items-center hover:bg-brand-1 hover:text-white py-2 pr-1 pl-2 rounded-l-full text-brand-2 bg-white hover:shadow-lg  border-brand-1 border transition duration-500 ease-in-out transform hover:-translate-x-1">
								<IoIosArrowBack className="text-lg mr-1" />
								Explore All
							</button>
						</Link>
						<HashLink to={`/order/${id}#order`}>
							<button className="w-32 flex items-center hover:bg-brand-1 hover:text-white py-2 pr-2 pl-2 rounded-r-full text-brand-2 bg-white hover:shadow-lg border-brand-1 border ml-1 transition duration-500 ease-in-out transform hover:translate-x-1 text-right">
								Order Now
								<IoIosArrowForward className="text-lg ml-1" />
							</button>
						</HashLink>
					</div>
					<div className="bg-brand-7 pb-20">
						<div className="flex flex-col items-center" id="order">
							<h1 className="text-white bg-brand-3 mt-20 w-60 text-center py-2 text-xl">
								Order Now
							</h1>
						</div>
						<div className="bg-brand-3 h-1  mb-10"></div>
						<form
							className="mt-4 flex flex-col items-center text-brand-1"
							onSubmit={handleSubmit(onSubmit)}
						>
							<input
								required
								type="text"
								placeholder="Name"
								className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
								style={{ outline: 'none' }}
								defaultValue={user.displayName}
								{...register('name')}
							/>
							<input
								required
								type="text"
								placeholder="Email"
								className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
								style={{ outline: 'none' }}
								value={user.email}
								{...register('email')}
							/>
							<input
								required
								type="text"
								placeholder="Address"
								className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
								style={{ outline: 'none' }}
								{...register('address')}
							/>
							<input
								required
								type="tel"
								placeholder="Phone Number"
								className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
								style={{ outline: 'none' }}
								{...register('number')}
							/>
							<button
								type="submit"
								className="text-white py-2 px-7 w-80 rounded-md bg-brand-3 transition duration-500 hover:bg-brand-2  border-black hover:shadow-lg hover:font-semibold"
							>
								Order
							</button>
							<br />
						</form>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Order;
