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

function App() {
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
							<Redirect to="/dashboard/myorders"></Redirect>
						</PrivateRoute>
						<PrivateRoute path="/order/:id">
							<Order></Order>
						</PrivateRoute>
						<PrivateRoute path="/dashboard/myorders">
							<MyOrders></MyOrders>
						</PrivateRoute>
						<PrivateRoute path="/dashboard/pay">
							<Pay></Pay>
						</PrivateRoute>
						<PrivateRoute path="/dashboard/addreview">
							<AddReview></AddReview>
						</PrivateRoute>
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
