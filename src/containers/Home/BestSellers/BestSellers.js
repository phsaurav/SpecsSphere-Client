import React from 'react';

const BestSellers = () => {
	return (
		<div className="container mx-auto">
			<div className="py-6">
				<div className="flex flex-col max-w-md bg-white overflow-hidden h-96 justify-center mx-auto">
					<div
						className="bg-cover h-52 bg-no-repeat"
						style={{
							backgroundImage:
								"url('https://i.ibb.co/zmMcRLR/1.jpg')",
						}}
					></div>
					<div className="p-4 flex flex-col justify-center text-center">
						<p className="mt-2 text-gray-600 text-xm tracking-widest uppercase">
							DITA
						</p>
						<h1 className="text-gray-900 font-bold text-2xl">
							Dita Grand-Evo
						</h1>
						<p className="mt-2 text-gray-600 text-sm">
							Navigator Eyeglasses
						</p>
						<div className="flex item-center mt-2">
							<svg
								className="w-5 h-5 fill-current text-gray-700"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
							</svg>
							<svg
								className="w-5 h-5 fill-current text-gray-700"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
							</svg>
							<svg
								className="w-5 h-5 fill-current text-gray-700"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
							</svg>
							<svg
								className="w-5 h-5 fill-current text-gray-500"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
							</svg>
							<svg
								className="w-5 h-5 fill-current text-gray-500"
								viewBox="0 0 24 24"
							>
								<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
							</svg>
						</div>
						<div className="flex item-center justify-between mt-3">
							<h1 className="text-gray-700 font-bold text-xl">
								$220
							</h1>
							<button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
								Add to Card
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSellers;
