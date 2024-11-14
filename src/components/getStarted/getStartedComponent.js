import { useState } from 'react';
import Popup from '../policyPopUps/policies';
import {
	FIRST_CONTENT,
	FOURTH_CONTENT,
	SECOND_CONTENT,
	THIRD_CONTENT,
} from './getStartedData';

const GetStartedComponent = () => {
	const [popupContent, setPopupContent] = useState(null);

	const openPopup = (title, content) => {
		setPopupContent({ title, content });
	};

	const closePopup = () => {
		setPopupContent(null);
	};

	const MenuList = [
		// [
		// 	'Managing your property',
		// 	// () => openPopup('Avoid Property Scam and Fraud', FIRST_CONTENT),
		// ],
		[
			'We are professional Property Managers',
			() =>
				openPopup('Work with professional Property Managers', SECOND_CONTENT),
		],
		[
			'Enjoy  Free Legal Advice (On your Properties)',
			() =>
				openPopup(
					'Enjoy  Free Legal Advice (On your Properties)',
					THIRD_CONTENT,
				),
		],
		[
			'Speak to vetted Building Contractors & Architects',
			() =>
				openPopup(
					'Speak to vetted Building Contractors & Architects',
					FOURTH_CONTENT,
				),
		],
		[
			'Avoid Property Scam and Fraud',
			() => openPopup('Avoid Property Scam and Fraud', FIRST_CONTENT),
		],
	
	
	];

	const handleButtonClick = (e, fc) => {
		e.preventDefault();
		fc();
	};

	return (
		<section className="sm:grid grid-cols-2">
			<div className="pt-8 xl:ml-5 flex items-start justify-start">
				<div className='flex flex-col justify-center xl:gap-4'>
					<h1 className="pt-10 text-2xl md:text-4xl font-bold text-center">
						Let&#39;s get started!
					</h1>

					{MenuList.map(([item, fc], index) => (
						<button
							key={index}
							className="text-base text-white leading-[1.8125rem] tracking-[-0.02rem] font-normal bg-[#166BBF] lg:w-[25rem] md:w-[22.35rem] sm:w-[17rem] p-2 my-3 w-[90vw]"
							onClick={fc ? (e) => handleButtonClick(e, fc) : undefined}
						>
							{item}
						</button>
					))}
				</div>			
			</div>

			<div className="xl:mt-[3.44rem] relative h-[22.375rem] xl:h-[29.375rem] w-full basis-[45%] sm:border-l-2 sm:pl-5 xl:pl-10 border-gray-400 flex items-center justify-center mt-10 sm:mt-[8rem] md:mt-[5rem]">
				<iframe
					className="w-full h-full"
					src="https://www.youtube.com/embed/3O22xPlb3CQ?start=16"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
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
};

export default GetStartedComponent;
