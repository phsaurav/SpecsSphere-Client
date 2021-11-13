import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
	const { handleSubmit, register, reset } = useForm();
	const { user } = useAuth();
	const onSubmit = (data) => {
		Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
		data.name = user.name;
		data.img = user.photoURL;
		data.email = user.email;

		fetch('https://specssphere.herokuapp.com/review', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Your Review Added. \n Thank you!!');
					reset();
				}
			});
	};
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:min-h-screen md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex flex-col justify-between w-full">
				<div>
					<div className="">
						<div
							className=" flex justify-center min-h-screen pt-20"
							style={{ height: '70vh' }}
						>
							<form
								className="flex flex-col items-center text-brand-1"
								onSubmit={handleSubmit(onSubmit)}
							>
								<select
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 pr-5"
									name="Gender"
									{...register('star')}
								>
									<option value="5">5 Star</option>
									<option value="4">4 Star</option>
									<option value="3">3 Star</option>
									<option value="2">2 Star</option>
									<option value="1">1 Star</option>
									<option value="0">0 Star</option>
								</select>

								<textarea
									required
									placeholder="Write Your Review Here"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-20 py-2 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('review')}
								/>
								<button
									type="submit"
									className="text-white py-2 px-7 w-96 rounded-md bg-brand-3 transition duration-500 hover:bg-brand-9"
								>
									Add
								</button>
								<br />
							</form>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AddReview;
