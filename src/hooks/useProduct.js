import { useEffect, useState } from 'react';

const useProduct = (id) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
	}, [id]);

	return [product, setProduct];
};

export default useProduct;
