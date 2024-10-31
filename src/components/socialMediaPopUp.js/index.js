// import React from "react";

import { UseMobileToggler } from '@/hooks/mobileViewQuery';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function SocialMediaPopup() {
	const { image, router } = UseMobileToggler();
	// const [pop, setPop] = useState(true);
	return (
		<>
			{image && (
				<div className="bg-[rgba(89,89,89,0.60)] fixed left-0 right-0 top-0 bottom-0 z-[999]">
					<div className="w-full max-w-[32.375rem] rounded-[0.9375rem] py-[2.5rem] bg-[white] text-center absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
						<Link
							href="/"
							className=" absolute z-[9999] top-[1.9rem] cursor-pointer right-[1.9rem]"
						>
							<svg
								// onClick={() => router.push("/")}

								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="26"
								viewBox="0 0 26 26"
								fill="none"
							>
								<g opacity="0.8" clipPath="url(#clip0_38_7835)">
									<path
										d="M14.4363 13.0003L25.7024 1.73408C26.0991 1.33743 26.0991 0.694334 25.7024 0.297733C25.3058 -0.098868 24.6627 -0.0989188 24.2661 0.297733L12.9999 11.5639L1.73374 0.297733C1.33709 -0.0989188 0.693998 -0.0989188 0.297397 0.297733C-0.0992037 0.694384 -0.0992545 1.33748 0.297397 1.73408L11.5636 13.0002L0.297397 24.2664C-0.0992545 24.6631 -0.0992545 25.3062 0.297397 25.7028C0.495698 25.9011 0.755646 26.0002 1.01559 26.0002C1.27554 26.0002 1.53544 25.9011 1.73379 25.7028L12.9999 14.4366L24.2661 25.7028C24.4643 25.9011 24.7243 26.0002 24.9842 26.0002C25.2442 26.0002 25.5041 25.9011 25.7024 25.7028C26.0991 25.3061 26.0991 24.663 25.7024 24.2664L14.4363 13.0003Z"
										fill="#151941"
									/>
								</g>
								<defs>
									<clipPath id="clip0_38_7835">
										<rect width="26" height="26" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>

						<div className="relative flex flex-col items-center ">
							<div className="relative">
								<div className="relative w-[12.6875rem] h-[15rem] rounded-[0.4375rem] overflow-hidden">
									<Image
										className=""
										// width={500}
										// height={500}
										fill
										src={`/assets/images/mookimg/${image + '.png'}`}
										alt="hero"
										width={1000}
										height={1000}
									/>
								</div>
								<div className="absolute bottom-[-15px] right-[-13.99px] rounded-[6.25rem] w-[3rem] h-[3rem] bg-white flex items-center justify-center ">
									<svg
										className=""
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
									>
										<g clipPath="url(#clip0_38_7829)">
											<path
												d="M1.62499 1.76915C-0.418175 3.8914 -7.92742e-06 6.14582 -7.92742e-06 12.9947C-7.92742e-06 18.6822 -0.992341 24.3837 4.20116 25.726C5.82291 26.1431 20.1922 26.1431 21.8118 25.7238C23.9742 25.1659 25.7335 23.412 25.974 20.3537C26.0076 19.9269 26.0076 6.06999 25.9729 5.63449C25.7172 2.3769 23.712 0.499487 21.0697 0.119237C20.4642 0.0314873 20.3428 0.00548727 17.2358 7.06092e-05C6.21508 0.00548727 3.79924 -0.485263 1.62499 1.76915Z"
												fill="url(#paint0_linear_38_7829)"
											/>
											<path
												d="M12.9979 3.40062C9.06427 3.40062 5.32894 3.05071 3.90219 6.71237C3.31286 8.22471 3.39844 10.1888 3.39844 13.0011C3.39844 15.469 3.31936 17.7884 3.90219 19.2888C5.32569 22.9526 9.09136 22.6016 12.9957 22.6016C16.7624 22.6016 20.6462 22.9938 22.0903 19.2888C22.6807 17.7613 22.594 15.8265 22.594 13.0011C22.594 9.25062 22.8009 6.82937 20.982 5.01154C19.1404 3.16987 16.6498 3.40062 12.9935 3.40062H12.9979ZM12.1377 5.13071C20.3429 5.11771 21.3872 4.20554 20.8109 16.8773C20.6061 21.359 17.1936 20.8672 12.9989 20.8672C5.35061 20.8672 5.13069 20.6484 5.13069 12.9968C5.13069 5.25637 5.73736 5.13504 12.1377 5.12854V5.13071ZM18.122 6.72429C17.4861 6.72429 16.9704 7.23996 16.9704 7.87587C16.9704 8.51179 17.4861 9.02746 18.122 9.02746C18.7579 9.02746 19.2736 8.51179 19.2736 7.87587C19.2736 7.23996 18.7579 6.72429 18.122 6.72429ZM12.9979 8.07087C10.2754 8.07087 8.06869 10.2787 8.06869 13.0011C8.06869 15.7235 10.2754 17.9303 12.9979 17.9303C15.7203 17.9303 17.9259 15.7235 17.9259 13.0011C17.9259 10.2787 15.7203 8.07087 12.9979 8.07087ZM12.9979 9.80096C17.2283 9.80096 17.2337 16.2013 12.9979 16.2013C8.76852 16.2013 8.76202 9.80096 12.9979 9.80096Z"
												fill="white"
											/>
										</g>
										<defs>
											<linearGradient
												id="paint0_linear_38_7829"
												x1="1.67485"
												y1="24.3394"
												x2="25.8391"
												y2="3.42554"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#FFDD55" />
												<stop offset="0.5" stop-color="#FF543E" />
												<stop offset="1" stop-color="#C837AB" />
											</linearGradient>
											<clipPath id="clip0_38_7829">
												<rect width="26" height="26" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
							<h3 className="text-[1.5rem] text-main_heading tracking-[-0.03rem] font-semibold ">
								Check these properties via Instagram
							</h3>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								className="mt-[0.75rem] mb-[0.81rem] text-base font-normal tracking-[-0.02rem] leading-[1.8125rem] text-sub_heading"
							>
								@thepropertyintels
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								className="bg-primary text-white p-[0.625rem] h-[3.125rem] w-[12.4375rem] rounded-[6.25rem] text-[1.125rem] font-semibold tracking-[-0.0225rem]"
							>
								Go to Instagram
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default SocialMediaPopup;
