import React from 'react';
import Header from '../../components/Header/Header';

const Login = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<Header></Header>
			<div className="bg-white h-screen w-1"></div>
			<div>
				<h1>This is Login Page</h1>
			</div>
		</div>
	);
};

export default Login;
