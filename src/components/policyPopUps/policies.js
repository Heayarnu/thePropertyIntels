import { Fragment } from 'react';

const Popup = ({ title, content, onClose }) => {
	return (
		<Fragment>
			<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
			<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
				<button
					onClick={onClose}
					className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
				<h2 className="text-2xl font-bold mb-4">{title}</h2>
				<div className="overflow-y-auto max-h-80 w-[75vw] sm:w-[60vw] xl:w-[50vw]">
					{content}
				</div>
			</div>
		</Fragment>
	);
};

export default Popup;
