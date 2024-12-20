// "use client"
import React from 'react';
import Link from 'next/link';
import { LogoLG } from './NavData';

function NavLarge() {
	return (
		<div className="pt-7 relative z-50 bg-transparent flex text-base font-medium tracking-[-0.02rem]  items-center justify-between">
			<div className=" bg-transparent flex items-center gap-[3.5rem]">
				<div className="absolute bottom-[-50px] left-0 right-0 h-[0.0625rem] bg-[rgba(212,69,69,0.05)]"></div>
				<Link
					href={'/#about'}
					className="text-white cursor-pointer whitespace-nowrap "
				>
					About Us
				</Link>
				<Link href={'/#contact'} className="text-white whitespace-nowrap">
					Contact Us
				</Link>
			</div>
			<Link href="/" className=" scale-125 -mt-2">
				{LogoLG}
			</Link>
			<div className="flex gap-[3.5rem] items-center">
				{/* <Link
					href={'/#services'}
					className="text-white block whitespace-nowrap"
				>
					Our Services
				</Link> */}
				<Link
					href={'/?registrationType=client'}
					className="text-white w -[9.25rem] text-center py-[0.625rem] px-[0.925rem] font-semibold font-base  tracking-[-0.02rem] rounded-[6.25rem] bg-[rgba(255,255,255,0.25)] shadow-[0px_0px_10px_0px_rgba(163,163,163,0.25)] whitespace-nowrap"
				>
					{/* Register Now */}
					Register your Property
				</Link>
			</div>
		</div>
	);
}

export default NavLarge;
