import React from 'react';
import { productGrid } from './productsdata';
import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SwiperCarousel from '../SwiperCarousel';

function ProductsComponent() {
	const router = useRouter();
	const handleClick = (route) => {
		router.push(route);
	};

	return (
		<section id="properties" className="w-full justify-items-center max-w-screen-2xl mx-auto">
			<div className="text-center font-normal track-[-0.025rem]">
				<h1 className="text-[1.5rem] md:text-[2.375rem] max-md:leading-[1.6875rem] tracking-[-0.03rem] font-bold text-main_heading">
					FIND YOUR DREAM HOME{/* Explore Homes On ThePropertyIntels */}
				</h1>
				{/* <p className="text-[0.875rem] md:text-[1.25rem] text-sub_heading">
          Elit nulla vel tempus congue ac ultricies sed in ornare
        </p> */}
				<div className="overflow-x-auto">
					<div className="flex flex-row md:flex-row gap-5 mt-[2.5rem] min-w-[52.5rem] mx-auto">
						{productGrid.map(([name, img, title, route], index) => (
							<div
								key={name + index}
								className={`whitespace-nowrap relative xl:w-[24rem] cursor-pointer xl:h-[30rem] sm:h-[26rem] w-[22rem] h-[23rem] sm:w-[23rem] md:w-[25rem] md:h-[28rem] ${name}`}
								onClick={() => handleClick(route)}
							>
								<Image
									width={500}
									height={700}
									className={`w-full h-full ${name} object-fill`}
									src={img}
									alt="Homes"
								/>
						

								{title && (
									<div className="bg-white flex items-center mr-[0.5rem] shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] border-[1px_solid_rgba(255,255,255,0.11)] text-[0.875rem] tracking-[-0.0175rem]   rounded-bl-xl px-2 py-1 bg-[rgba(255,255,255,0.55)] absolute -right-2 top-0 ">
										<h1 className="text-center text-lg font-bold text-primary">
											{title}
										</h1>
									</div>
								)}

{index !== 0 && (
      <button
        onClick={() => handleClick(route)}
        className="flex items-center see-more mr-[0.5rem] shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] hover:bg-white hover:border-primary hover:border-2 border-[1px_solid_rgba(255,255,255,0.11)] text-[0.875rem] tracking-[-0.0175rem] font-bold gap-[0.25rem] text-primary rounded-[6.25rem] bg-[rgba(249,249,250,0.91)] absolute right-2 bottom-5 p-[0.625rem_0.3125rem_0.625rem_0.875rem]"
      >
        <span>see more</span>
        <FaAngleRight className="inline-block" />
      </button>
    )}
							</div>
						))}

						{/* <div className="first bg-red-500"></div>
          <div className="second bg-black"></div>
          <div className="third bg-purple-700"></div>
          <div className="forth bg-orange-500"></div>
          <div className="fifth bg-slate-900"></div>
          <div className="sixth bg-green-500"></div> */}
					</div>
				</div>
				{/* </div> */}
			</div>

			 {/* <SwiperCarousel/> */}
		</section>
	);
}

export default ProductsComponent;
