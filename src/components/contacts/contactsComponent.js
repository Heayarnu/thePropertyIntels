import React from 'react';
import { contacsInfo } from './contactsdata';
import { FooterSocials } from '../footer/footerData';
import ContactsForm from './contactsForm';
import { GrLocation } from 'react-icons/gr';
function ContactsComponent() {
	return (
		<section id="contact" className="pb-[5.7rem] ">
			<div className="lg:flex justify-between xl:mr-5">
				<div>
					<p className=" text-[0.75rem] md:text-[0.875rem] leading-[1.8125rem] tracking-[-0.0175rem] font-normal text-sub_heading">
						NEED TO REACH OUT TO US ?{' '}
					</p>
					<h2 className="mt-[.94rem] mb-[.] text-[1.5rem] md:text-[2.375rem] tracking-[-0.0475rem] font-bold text-main_heading">
						Contact Us
					</h2>
					<div className="my-[1.06rem] md:my-[1.25rem] h-[0.0625rem] bg-[rgba(191,191,191,0.35)]"></div>
					<div>
						<div className="">
							<div className="flex mb-[2.5rem] gap-[.31rem] md:gap-[.94rem] items-center">
								<GrLocation className="text-[#151941] " size={42} />
								<div>
									<h3 className="text-base md:text-[1.25rem] font-medium tracking-[-0.05rem] text-main_heading">
										Visit Our Office at:
									</h3>
									<h4 className="text-sub_heading  text-[0.875rem] md:text-[1.125rem] md:leading-[2rem] tracking-[-0.0225rem]">
										Safecourt building, Ojulari Crescent,Lekki Pennisula II,
										Lagos 106014, Lagos
									</h4>
								</div>
							</div>
							<div className="flex mb-[2.5rem] gap-[.31rem] md:gap-[.94rem] items-center">
								{contacsInfo.email}
								<div>
									<h3 className="text-base md:text-[1.25rem] font-medium tracking-[-0.05rem] text-main_heading">
										Send us a mail
									</h3>
									<h4 className="text-sub_heading  text-[0.875rem] md:text-[1.125rem] md:leading-[2rem] tracking-[-0.0225rem]">
										via support@thepropertyintels.com
									</h4>{' '}
								</div>
							</div>
							<div className="flex gap-[.31rem] md:gap-[.94rem] items-center">
								{contacsInfo.tell}
								<div>
									<h3 className="text-base md:text-[1.25rem] font-medium tracking-[-0.05rem] text-main_heading">
										Call us
									</h3>
									<h4 className="text-sub_heading text-[0.875rem] md:text-[1.125rem] md:leading-[2rem] tracking-[-0.0225rem]">
										via +234 7066040602
									</h4>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="mt-[2.81rem] mb-[1rem] flex gap-[1.06rem]">
						{FooterSocials.map(({ icon, link }, key) => (
							<a href={`${link}`} target="_blank" key={key}>
								{icon}
							</a>
						))}
					</div>
				</div>
				<ContactsForm />
			</div>
		</section>
	);
}

export default ContactsComponent;
