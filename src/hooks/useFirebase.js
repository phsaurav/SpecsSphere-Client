import { useEffect, useState } from 'react';
import initializeAuthentication from '../services/Firebase/firbase.init';
import { useHistory } from 'react-router-dom';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	updateProfile,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	getIdToken,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const history = useHistory();

	const [user, setUser] = useState({});
	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState('');
	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	const processLogin = (email, password) => {
		setIsLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const createNewUser = (email, password) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				const newUser = { email, displayName: name };
				setUser(newUser);

				saveUser(email, name, 'POST');

				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((err) => {});

				setError('');
				history.replace('/');
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const saveUser = (email, displayName, method) => {
		console.log(email, displayName);
		const user = { email, displayName };
		fetch('http://localhost:5000/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	// useEffect(() => {
	// 	fetch(`http://localhost:5000/users/${user?.email}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setAdmin(data.admin));
	// }, [user?.email]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				getIdToken(user).then((idToken) => {
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		user,
		admin,
		name,
		token,
		error,
		isLoading,
		setUser,
		setError,
		setIsLoading,
		processLogin,
		logOut,
		signInUsingGoogle,
		createNewUser,
		saveUser,
		setName,
	};
};

export default useFirebase;