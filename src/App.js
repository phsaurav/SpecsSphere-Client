import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/home"></Redirect>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route>
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
