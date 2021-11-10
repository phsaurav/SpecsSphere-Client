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
