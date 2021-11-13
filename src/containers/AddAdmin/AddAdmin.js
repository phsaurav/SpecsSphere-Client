import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashHeader from '../../components/DashHeader/DashHeader';
import Footer from '../../components/Footer/Footer';
import useAuth from '../../hooks/useAuth';

const AddAdmin = () => {
	const { handleSubmit, register, reset } = useForm();
	const [success, setSuccess] = useState(false);
	const { token } = useAuth();

	const onSubmit = (data) => {
		const email = data.email;

		const user = { email };
		console.log(user);
		fetch('https://specssphere.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert('User Added as Admin.');
					setSuccess(true);
					reset();
				}
			});
		Object.keys(data).forEach((k) => data[k] === '' && delete data[k]);
	};
	return (
		<div className="flex flex-col md:min-h-screen md:flex-row">
			<div className=" md:w-80 xl:w-96">
				<DashHeader></DashHeader>
			</div>

			<div className="flex flex-col justify-between w-full">
				<div>
					<div className="">
						<div
							className=" flex justify-center pt-20"
							style={{ height: '70vh' }}
						>
							<form
								className="flex flex-col items-center text-brand-1"
								onSubmit={handleSubmit(onSubmit)}
							>
								<input
									type="email"
									placeholder="Email"
									className="text-sm w-96 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
									style={{ outline: 'none' }}
									{...register('email')}
								/>
								<button
									type="submit"
									className="text-white py-2 px-7 w-96 rounded-md bg-brand-3 transition duration-500 hover:bg-white border-2 border-black hover:text-black"
								>
									Add Admin
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

export default AddAdmin;
