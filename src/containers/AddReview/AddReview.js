import React from 'react';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';
import { useForm } from 'react-hook-form';

const AddReview = () => {
	const { handleSubmit, register, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:min-h-screen md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex flex-col justify-between w-full">
				<div>
					<div className="bg-brand-7">
						<div
							className="bg-brand-7 flex justify-center min-h-screen pt-20"
							style={{ height: '70vh' }}
						>
							<form
								className="flex flex-col items-center text-brand-1"
								onSubmit={handleSubmit(onSubmit)}
							>
								<input
									required
									type="text"
									placeholder="Title"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('title')}
								/>
								<input
									required
									type="text"
									placeholder="Location"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('location')}
								/>
								<input
									required
									type="text"
									placeholder="Heading"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('heading')}
								/>
								<textarea
									required
									placeholder="Description"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-20 py-2 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('description')}
								/>
								<input
									required
									type="number"
									placeholder="Number of Days"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('days')}
								/>
								<input
									required
									type="number"
									placeholder="Tour cost in Taka"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('price')}
								/>
								<input
									required
									type="url"
									placeholder="Image URL"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg mb-3"
									style={{ outline: 'none' }}
									{...register('img')}
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
