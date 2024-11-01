'use client';
import React, { useState } from 'react';
import { servicesArray } from './servicesdata';
import Image from 'next/image';

function ServicesComponent() {
	const [showFullText, setShowFullText] = useState(
		servicesArray.map(() => false),
	);

	const handleLearnMoreClick = (index) => {
		const updatedShowFullText = [...showFullText];
		updatedShowFullText[index] = true;
		setShowFullText(updatedShowFullText);
	};
	return (
		<section id="services" className="w-full pt-[7.19rem]">
			<div className=" font-normal track-[-0.025rem] ">
				<h1 className=" text-center text-[1.5rem] md:text-[2.375rem] text-main_heading font-bold">
					{/* See How ThePropertyIntels Helps */}
					Our Services
				</h1>
				{/* <p className="text-[1.25rem] text-sub_heading">
          Elit nulla vel tempus congue ac ultricies sed in ornare
        </p> */}
				<div className="mt-[3.76rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[2.25rem] md:gap-[1.87rem]">
					{servicesArray.map(({ icon, title, subtile }, index) => (
						<div key={title} className="">
							<div className="mb-[.62rem] md:mb-[.87rem] flex flex-row justify-center">
								{' '}
								{/*{icon} */}
								<Image
									src={icon}
									alt=""
									className="h-[200px]"
									height={400}
									width={250}
								/>
							</div>
							<h3 className="text-primary text-[1.25rem] tracking-[-0.05rem] text-center font-medium uppercase">
								{title}
							</h3>
							<div className="my-[1.56rem] h-[0.0625rem] bg-[rgba(191,191,191,0.35)]"></div>
							<p className="text-sub_heading text-base leading-[1.8125rem] tracking-[-0.02rem]">
								{subtile}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ServicesComponent;
