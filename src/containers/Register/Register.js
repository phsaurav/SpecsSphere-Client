import React from 'react';
import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Register = () => {
	const {
		auth,
		setError,
		error,
		createNewUser,
		setUser,
		setIsLoading,
		signInUsingGoogle,
		saveUser,
		updateProfile,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/dashboard';
	const { handleSubmit, register } = useForm();

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				const user = res.user;
				setUser(user);
				saveUser(user.email, user.displayName, user.photoURL, 'PUT');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				history.push(redirect_uri);
				setIsLoading(false);
			});
	};

	const onSubmit = (data) => {
		if (data?.password?.length <= 5) {
			setError('Password Must be atleast 6 character long');
			return;
		}
		if (!/^(?=.*[0-9])/.test(data.password)) {
			setError('Password Must have one nubmer!');
			return;
		}
		if (data.password !== data.password2) {
			setError("Password Doesn't match!!");
			return;
		}
		setError('');
		createNewUser(data.email, data.password)
			.then((res) => {
				const email = data.email;
				const newUser = { email, displayName: data.name };
				const url =
					data.gender === 'male'
						? 'https://i.ibb.co/7VH1GDT/male.png'
						: 'https://i.ibb.co/VmSVPNR/female.png';
				setUser(newUser);
				saveUser(data.email, data.name, url, 'POST');
				updateProfile(auth.currentUser, {
					displayName: data.name,
					photoURL: url,
				})
					.then(() => {})
					.catch((err) => {});
				setError('');
				history.push(redirect_uri);
				window.location.reload();
				setUser(res.user);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<Link to="/home">
				<button
					type="button"
					className="bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500 text-brand-1"
				>
					<MdClose></MdClose>
				</button>
			</Link>
			<div className="flex flex-col justify-start items-center h-screen pt-20">
				<img src={logo} alt="Logo" style={{ height: '51px' }} />

				<form className="mt-4 " onSubmit={handleSubmit(onSubmit)}>
					<input
						required
						type="text"
						placeholder="Name"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
						{...register('name')}
					/>
					<input
						required
						type="email"
						placeholder="Email"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
						{...register('email')}
					/>
					<input
						required
						type="password"
						placeholder="Password"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
						{...register('password')}
					/>
					<input
						required
						type="password"
						placeholder="Confirm Password"
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
						{...register('password2')}
					/>
					<select
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 pr-5"
						name="Gender"
						{...register('gender')}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					<button className="text-white py-2 px-7 w-80 rounded-md bg-brand-1 hover:bg-white border-2 border-brand-1 hover:text-black">
						Sign Up
					</button>
					<br />
					<Link to="/login">
						<p className="text-center py-3 font-semibold text-brand-1">
							Already have an account
						</p>
					</Link>
				</form>
				<p className="text-center py-3 font-semibold text-brand-12">
					{error}
				</p>
				<hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>
				<div className="flex justify-center pb-10">
					<button
						onClick={handleGoogleSignIn}
						className="rounded-full bg-brand-1 text-white text-2xl p-2 mt-5 hover:bg-white  border-white hover:border-brand-1 border-2 hover:text-brand-1"
					>
						<BsGoogle />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
