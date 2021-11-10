import React from 'react';
import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
	const {
		processLogin,
		setEmail,
		setPassword,
		error,
		setError,
		setUser,
		setIsLoading,
		signInUsingGoogle,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/home';

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				setUser(res.user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const handleSignIn = (e) => {
		e.preventDefault();

		processLogin()
			.then((res) => {
				setUser(res.user);
				setError('');
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
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

				<form className="mt-4 " onSubmit={handleSignIn}>
					<input
						type="text"
						placeholder="Email"
						onChange={handleEmailChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={handlePasswordChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<button className="text-white py-2 px-7 w-80 rounded-md bg-brand-1">
						Log In
					</button>
					<br />
					<Link to="/register">
						<p className="text-center pt-3 font-semibold text-brand-1">
							New user?
						</p>
					</Link>
					<p className="text-center py-3 font-semibold text-brand-1">
						{error}
					</p>
				</form>
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
