'use client';
// import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { LogoLG, NavMenuList, mobileToggler } from './NavData';
import { UseMobileToggler } from '@/hooks/mobileViewQuery';
import { usePathname } from 'next/navigation';
function NavbarSmallScreen() {
	const { mobileView, router, pathname } = UseMobileToggler();
	const pathName = usePathname();

	const bgSpacing = pathName !== '/' ? '-ml-[3.25rem]' : '';

	return (
		<nav className="md:hidden absolute z-50 top-0 w-full bg-transparent justify-between px-[1rem] md:px-[2.31rem] pt-[1.25rem] pb-[1.13rem] flex items-center font-inter leading-[normal] text-[red]">
			<Link href="/" className={`${bgSpacing} scale-105 -mt-0.5`}>
				{LogoLG}
			</Link>
			<div
				className={`${
					mobileView !== 'true'
						? 'max-md:hidden bg-transparent'
						: 'bg-transparent '
				} max-md:fixed top-0 left-0 right-0 max-md:w-[screen] max-md:h-screen z-40`}
			>
				<Link
					href={`${pathname}?open=false`}
					className="h-screen bg-[#00a2ff50] block md:hidden cursor-default "
				></Link>
				<div
					className={`${'max-md:bg-white max-md:dark:bg-[rgba(37,42,47,1)]'} max-md:absolute right-0 top-0 max-md:p-[5rem_0_0_1.98rem] z-40 max-md:h-screen max-md:w-[15.625rem] max-md:inset-0 text-[0.875rem] font-normal md:flex justify-center items-center md:max-w-[29.1rem] lg:max-w-[40rem] max-md:ml-auto gap-[1.5rem] lg:gap-[2.5rem]`}
				>
					{NavMenuList.map(([name, url], index) => (
						<Link
							key={name}
							href={`/?open=false${url}`}
							className={`block ${index == 5 && 'md:hidden'}
              
              `}
						>
							<ol className=" pl-0 max-md:hover:text-primary hover:text-[red] md:text-default2 text-default hover:dark:text-[#979797]  dark:text-default2 inline-block hover:font-bold text-[1.125rem] max-md:mb-[2rem] font-medium font-inter whitespace-nowrap">
								{name}
							</ol>
						</Link>
					))}
				</div>
			</div>
			{mobileView == 'true' ? (
				<>
					<Link
						href={`${pathname}?open=false`}
						className="ml-auto max-md:fixed top-[1.7rem] right-[1rem] md:hidden relative z-50 "
					>
						{mobileToggler.close}
					</Link>
					{/* This is just to avoid layout shift when the close and oepn buttons are clicked */}
					<Link href={`${pathname}?open=false`} className="ml-auto md:hidden  ">
						{mobileToggler.close}
					</Link>
				</>
			) : (
				<Link href={`${pathname}?open=true`} className="ml-auto md:hidden ">
					{mobileToggler.open}
				</Link>
			)}
		</nav>
	);
}

export default NavbarSmallScreen;
// nav menu bar
{
	/* <Link
key={name}
href={`${url}?open=false`}
className={`block ${index == 5 && "md:hidden"}
 ${
  // add dashboard to nav bar is signed in
  name === "Dashboard" && !user?.token
    ? "hidden"
    : name === "Sign in" && user?.token
    ? "hidden"
    : null
}
`}
>
<ol className=" pl-0 max-md:hover:text-primary hover:text-[red] md:text-default2 text-default hover:dark:text-[#979797]  dark:text-default2 inline-block hover:font-bold text-[1.125rem] max-md:mb-[2rem] font-medium font-inter whitespace-nowrap">
  {name}
</ol>
</Link> */
}
