import React, { useState } from 'react';
import {
	FooterSocials,
	footerLogo,
	TERMS_OF_SERVICE_CONTENT,
	PRIVACY_POLICY_CONTENT,
	COOKIES_POLICY_CONTENT,
} from './footerData';
import Popup from '../policyPopUps/policies';
import Link from 'next/link';
import Image from 'next/image';
function FooterComponent() {
	const [popupContent, setPopupContent] = useState(null);

	const openPopup = (title, content) => {
		setPopupContent({ title, content });
	};

	const closePopup = () => {
		setPopupContent(null);
	};

	const FooterMenuList = [
		// ["Home", "/"],
		['Contact Us', '#contact'],
		['Our Services', '#services'],
		[
			'Terms of Service',
			'#Terms',
			() => openPopup('Terms of Service', TERMS_OF_SERVICE_CONTENT),
		],
		[
			'Privacy Policy',
			'#Terms',
			() => openPopup('Privacy Policy', PRIVACY_POLICY_CONTENT),
		],
		[
			'Cookies Policy',
			'#Terms',
			() => openPopup('Cookies Policy', COOKIES_POLICY_CONTENT),
		],
	];

	const handleLinkClick = (e, fc) => {
		e.preventDefault();
		fc();
	};
	return (
		<section className="pb-[5.8rem]">
			<div className="relative">
				{footerLogo}
				<div className="lg:flex justify-between mt-[1.38rem]">
					<p className="mb-5">Explore Property Intels</p>
					<div className="max-lg:grid flex gap-[1.88rem] lg:gap-[4.38rem] grid-cols-2">
						{FooterMenuList.map(([item, link, fc], index) => (
							<Link
								key={index}
								className="text-base text-[#414356] leading-[1.8125rem] tracking-[-0.02rem] font-normal "
								href={link}
								onClick={fc ? (e) => handleLinkClick(e, fc) : undefined}
							>
								{item}
							</Link>
						))}
					</div>
				</div>
				<div className="mb-[1.75rem] mt-[2.19rem] h-[0.0625rem] bg-[rgba(191,191,191,0.25)]"></div>
				<div className="lg:flex justify-between items-center ">
					<div>
						<p className="text-footer text-base leading-[1.25rem] font-normal max-lg:text-center ">
							© 2024 ThePropertyintel. All Rights Reserved.
						</p>
						<div className="flex items-center max-lg:justify-center">
							<p className="text-footer text-base leading-[1.25rem] font-normal max-lg:text-center ">
								Powered by Philip Edge Africa
							</p>
							<Image
								src="/assets/images/footer/pe.jpg"
								alt="phillip-edge"
								className=" h-[35px]"
							/>
						</div>
					</div>
					<div className="flex gap-[1.06rem] max-lg:absolute top-[215px] right-[20px]">
						{FooterSocials.map(({ icon, link }, key) => (
							<a href={`${link}`} target="_blank" key={key}>
								{icon}
							</a>
							//   <p></p>
						))}
					</div>
				</div>
			</div>
			{popupContent && (
				<Popup
					title={popupContent.title}
					content={popupContent.content}
					onClose={closePopup}
				/>
			)}
		</section>
	);
}

export default FooterComponent;
