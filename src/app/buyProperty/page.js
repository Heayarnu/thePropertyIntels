'use client';

import FooterComponent from '@/components/footer/footerComponent';
import Items from '@/components/items/items';
import NavMain from '@/components/navigationBar/navMain';
import NavbarSmallScreen from '@/components/navigationBar/navSmall';
import { Suspense } from 'react';

const page = () => {
	return (
		<Suspense>
			<div className="relative ">
				<div className="bg-primary h-[6.5rem] w-full flex items-center justify-center">
					<NavMain />
					<NavbarSmallScreen />
				</div>

				<Items heading="Buy A Property" />

				<div className="xl:px-[6.3rem] max-xl:w-[90%] mx-auto">
					<FooterComponent />
				</div>
			</div>
		</Suspense>
	);
};

export default page;
