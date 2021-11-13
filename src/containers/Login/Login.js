import React from 'react';
import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { BsGoogle } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const Login = () => {
	const {
		processLogin,
		error,
		setError,
		setUser,
		setIsLoading,
		signInUsingGoogle,
		saveUser,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/home';
	const { handleSubmit, register } = useForm();

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				const user = res.user;
				setUser(user);
				saveUser(user.email, user.displayName, user.photoURL, 'PUT');
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const onSubmit = (data) => {
		processLogin(data.email, data.password)
			.then((res) => {
				setUser(res.user);
				setError('');
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				window.location.reload();
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
			<div className="flex flex-col justify-center items-center h-screen">
				<img src={logo} alt="Logo" style={{ height: '51px' }} />

				<form className="mt-4 " onSubmit={handleSubmit(onSubmit)}>
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
					<button className="text-white py-2 px-7 w-80 rounded-md bg-brand-1 hover:bg-white border-2 border-brand-1 hover:text-black">
						Log In
					</button>
					<br />
					<Link to="/register">
						<p className="text-center pt-3 font-semibold text-brand-1">
							New user?
						</p>
					</Link>
				</form>
				<p className="text-center py-3 font-semibold text-brand-12">
					{error}
				</p>
				<hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>
				<div className="flex justify-center mb-80">
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

export default Login;
