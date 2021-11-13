import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './containers/Login/Login';
import Explore from './containers/Explore/Explore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './containers/MyOrders/MyOrders';
import Pay from './containers/Pay/Pay';
import Register from './containers/Register/Register';
import Order from './containers/Home/Order/Order';
import AddReview from './containers/AddReview/AddReview';
import AddAdmin from './containers/AddAdmin/AddAdmin';
import AllOrders from './containers/AllOrders/AllOrders';
import useFirebase from './hooks/useFirebase';
import AdminRoute from './components/AdminRoute/AdminRoute';
import AddProduct from './containers/AddProduct/AddProduct';
import ManageProduct from './containers/ManageProduct/ManageProduct';

function App() {
	const { admin } = useFirebase();
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Redirect to="/home"></Redirect>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route path="/explore">
							<Explore></Explore>
						</Route>
						<PrivateRoute path="/dashboard" exact>
							{admin ? (
								<Redirect to="/dashboard/allorders"></Redirect>
							) : (
								<Redirect to="/dashboard/myorders"></Redirect>
							)}
						</PrivateRoute>
						<PrivateRoute path="/order/:id">
							<Order></Order>
						</PrivateRoute>
						<PrivateRoute path="/dashboard/myorders">
							{admin ? (
								<Redirect to="/dashboard/allorders"></Redirect>
							) : (
								<MyOrders></MyOrders>
							)}
						</PrivateRoute>
						<PrivateRoute path="/dashboard/pay">
							{admin ? (
								<Redirect to="/dashboard/allorders"></Redirect>
							) : (
								<Pay></Pay>
							)}
						</PrivateRoute>
						<PrivateRoute path="/dashboard/addreview">
							{admin ? (
								<Redirect to="/dashboard/allorders"></Redirect>
							) : (
								<AddReview></AddReview>
							)}
						</PrivateRoute>
						<AdminRoute path="/dashboard/addadmin">
							<AddAdmin></AddAdmin>
						</AdminRoute>
						<AdminRoute path="/dashboard/allorders">
							<AllOrders></AllOrders>
						</AdminRoute>
						<AdminRoute path="/dashboard/addproduct">
							<AddProduct></AddProduct>
						</AdminRoute>
						<AdminRoute path="/dashboard/manageproduct">
							<ManageProduct></ManageProduct>
						</AdminRoute>
						<Route>
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
