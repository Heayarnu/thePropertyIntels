import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function AboutComponent() {
	// const [show, setShow] = useState(false);
	return (
		<section id="about">
			<h2 className="mt-[.94rem] text-center mb-[.62rem] text-[1.5rem] md:text-[2.375rem] tracking-[-0.0475rem] font-bold text-main_heading">
						ABOUT US
			</h2>
			
			<div className="items-center flex flex-col xl:grid xl:grid-cols-[1fr_1.5fr] space-y-6 md:space-y-0 gap-5 md:pt-10">
				
				
				<div className="w-full xl:border xl:shadow-sm sm:pt-5 xl:p-5 h-[97%] text-[0.875rem] sm:text-[1rem] xl:text-[1.125rem] tracking-[-0.0225rem] leading-[1.75rem] md:leading-[2rem] font-normal text-sub_heading xl:rounded-md space-y-1 xl:space-y-2">
					<p >
						At The Property Intels, we make real estate dreams come true with
						passion and expertise.
					</p>

					<p >
						For Nigerians abroad wanting to invest at home, our yearly
						subscription includes access to top property lawyers, expert
						investment management, and professional support for buying or
						building properties. We provide personalized real estate advice and
						assign a dedicated property manager to each client.	You&#39;ll receive quarterly updates with videos and recommendations
						to keep you informed about your property&#39;s status.
					
					</p>

					
					

					<p >
						With a personalized approach and advanced technology, The Property
						Intels ensures a seamless real estate experience, whether you&#39;re
						buying, investing, or selling.
					</p>

					<p >
						Welcome to The Property Intels – where dreams become reality.
					</p>

					{/* {show && (
							<span>
								Whether you&#39;re a first-time homebuyer, an experienced
								investor, or looking to sell your property, we have the
								expertise and resources to cater to your every need. But beyond
								expertise, what truly defines us is our personalized approach.
								We believe that every client is unique, and so are their needs.
								That&#39;s why we take the time to listen, understand, and
								tailor our solutions to match your specific requirements.
								Whether it&#39;s finding the perfect home, negotiating the best
								deal, or marketing your property effectively, we go above and
								beyond to exceed your expectations. With our comprehensive range
								of services, cutting-edge technology, and a vast network of
								partners, we&#39;re here to guide you every step of the way,
								ensuring that your real estate experience is nothing short of
								exceptional. So, whether you&#39;re looking to find your dream
								home, make a lucrative investment, or sell your property for the
								best possible price, look no further than The Property Intel .
								With us, your real estate goals are not just within reach;
								they&#39;re well within grasp. Welcome to a world of endless
								possibilities. Welcome to The Property Intel
							</span>
						)} */}
					{/* <div
						href="#properties"
						className="w-[11.3125rem] block text-center rounded-[6.25rem] p-[0.625rem] border-[rgba(255,255,255,0.91)] text-base md:text-[1.125rem] tracking-[-0.0225rem] mt-[2.5rem] text-white font-semibold bg-primary border border-solid cursor-pointer"
						onClick={() => setShow(true)}
					>
						Learn more
					</div> */}
				</div>

				<Image	
					alt='about'
					src='/assets/map-d.png'
					height={300}
					width={500}
				className='h-[97%] w-full mt-5 xl:mt-0 rounded-sm'/>

				{/* <div className="mt-[3.44rem] relative h-[35.375rem] w-full basis-[35%]">
          <Image
            className=""
            // width={3840}
            // height={2160}
            fill
            src={"/assets/images/hero/about.jpg"}
            alt="hero"
          />
        </div> */}
			</div>
		</section>
	);
}

export default AboutComponent;
