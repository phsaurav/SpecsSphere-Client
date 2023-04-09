import { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://specssphere-server-production.up.railway.app/products`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);

	return [products, setProducts];
};

export default useProducts;
