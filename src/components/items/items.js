import Image from 'next/image';
import React from 'react';

const Items = ({ heading }) => {
	return (
		<div>
			<h1 className="font-bold text-center my-10 text-4xl">{heading}</h1>

			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10 mt-10 xl:mx-10 mx-5 sm:gap-7 mb-28">
				{Array.from({ length: 12 }).map((_, index) => (
					<div
						key={index}
						className="flex flex-col w-auto  shadow-md rounded-md"
					>
						<Image
							src="/assets/images/mookimg/ikoyi1.png"
							alt={`property${index + 1}`}
							width={350}
							height={500}
							className="object-cover  rounded-t-md"
						/>

						<h1 className="px-1 pt-2 line-clamp-3 sm:text-base text-sm">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</h1>

						<div className="flex flex-col sm:flex-row justify-between py-2 px-1 items-center">
							<h2 className="text-xl xl:text-2xl font-bold px-1">
								N100,000,000
							</h2>

							<button className="bg-primary text-white font-bold text-xl py-1 sm:px-5 mt-2 sm:mt-0 w-full sm:w-auto sm:rounded-2xl rounded-lg hover:scale-105 hover:bg-[#0c549c]">
								Buy
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Items;
