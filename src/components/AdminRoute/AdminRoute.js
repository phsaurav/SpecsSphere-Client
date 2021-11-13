import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './AdminRoute.css';

const AdminRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	const admin = sessionStorage.getItem('admin');
	if (isLoading) {
		return (
			<div className=" flex justify-center items-center min-h-screen mb-40">
				<div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
			</div>
		);
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin === 'true' ? (
					children
				) : (
					<Redirect
						to={{ pathname: '/', state: { from: location } }}
					></Redirect>
				)
			}
		></Route>
	);
};

export default AdminRoute;
