import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';

const AddProduct = () => {
	const { handleSubmit, register, reset } = useForm();
	const history = useHistory();

	const onSubmit = (data) => {
		Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);

		fetch('https://specssphere-server-production.up.railway.app/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('A New Product Added to the collection.');
					history.push('/explore');
					reset();
				}
			});
	};
	return (
		<div className="flex flex-col min-h-screen md:flex-row">
			<div className=" md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex flex-col justify-between w-full">
				<div>
					<div className="">
						<div
							className=" flex justify-center pt-20"
							style={{ height: '600px' }}
						>
							<form
								className="flex flex-col items-center text-brand-1"
								onSubmit={handleSubmit(onSubmit)}
							>
								<input
									required
									type="text"
									placeholder="Title"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
									style={{ outline: 'none' }}
									{...register('title')}
								/>
								<input
									required
									type="text"
									placeholder="Type"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
									style={{ outline: 'none' }}
									{...register('type')}
								/>
								<input
									required
									type="text"
									placeholder="brand"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
									style={{ outline: 'none' }}
									{...register('brand')}
								/>
								<input
									required
									type="number"
									placeholder="Price"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
									style={{ outline: 'none' }}
									{...register('price')}
								/>
								<input
									required
									type="url"
									placeholder="Image URL"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2"
									style={{ outline: 'none' }}
									{...register('img')}
								/>
								<select
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2 pr-5"
									name="Gender"
									{...register('gender')}
								>
									<option value="male">Men Collection</option>
									<option value="female">
										Female Collection
									</option>
								</select>
								<select
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-2 pr-5"
									name="Gender"
									{...register('star')}
								>
									<option value="5">
										Initial Review: 5 Star
									</option>
									<option value="4">
										Initial Review: 4 Star
									</option>
									<option value="3">
										Initial Review: 3 Star
									</option>
									<option value="2">
										Initial Review: 2 Star
									</option>
									<option value="1">
										Initial Review: 1 Star
									</option>
									<option value="0">
										Initial Review: 0 Star
									</option>
								</select>
								<button className="text-white py-2 px-7 w-96 rounded-md bg-brand-1 hover:bg-white border-2 border-brand-1 hover:text-black">
									Add Product
								</button>
							</form>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default AddProduct;
