import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from '../policyPopUps/policies';
import { images } from './teamsData';

function TeamsComponent() {
	const [popupContent, setPopupContent] = useState(null);

	const openPopup = (name, description) => {
		setPopupContent({ name, description });
	};

	const closePopup = () => {
		setPopupContent(null);
	};

	return (
		<section id="teams">
			<div className="pb-[3rem]">
				<h1 className=" text-center text-[1.5rem] md:text-[2.375rem] text-main_heading font-bold">
				OUR TEAM
				</h1>
			</div>
			<div>
				<div className="flex justify-center">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-7 gap-y-9 max-w-7xl mx-auto">
						{images.map((image, index) => (
							<div
								key={index}
								className="rounded-3xl h-[350px] overflow-hidden relative cursor-pointer"
								onClick={() => openPopup(image.name, image.description)}
							>
								<Image
									src={image.src}
									alt={image.alt}
									className="w-full h-full rounded-3xl"
									width={1000}
									height={1000}
								/>
								<div className="absolute bottom-0 left-0 right-0 p-3 h-[90px] bg-gray-200">
									<p className="text-sm font-light">{image.name}</p>
									<p className="text-xs font-light text-gray-500">
										{image.role}
									</p>
									<p className="text-xs font-light text-gray-500">
										{image.DesRole}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{popupContent && (
				<Popup
					title={popupContent.name}
					content={popupContent.description}
					onClose={closePopup}
				/>
			)}
		</section>
	);
}

export default TeamsComponent;
