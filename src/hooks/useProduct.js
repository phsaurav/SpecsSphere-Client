import { useEffect, useState } from 'react';

const useProduct = (id) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`https://specssphere-server-production.up.railway.app/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, [id]);

	return [product, setProduct];
};

export default useProduct;
