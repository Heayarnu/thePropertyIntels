'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
	countriesOfProperties,
	registerCompanyAsAgentFields,
	registerFormField,
} from './registerAgentdata';
import Input, {
	getCountries,
	getCountryCallingCode,
} from 'react-phone-number-input/input';
import { PhoneInput } from 'react-international-phone';
import ErrorMessageCtn from '../errorMessage';
import { UseMobileToggler } from '@/hooks/mobileViewQuery';
import { postInformation } from '@/hooks/postRequest';
import SmallLoadingSpinner from '../smLoadingSpinner';
import { toast } from 'react-toastify';
function CompanyAsAgentForm({ submitStatus }) {
	const { toggleQuery, router } = UseMobileToggler();
	const [isLoading, setloading] = useState(false);
	const InitiaState = {
		fullName: '',
		phoneNumber: '',
		phoneNumberWork: '',
		email: '',
		country: '',
		city: '',
		address: '',
		companyName: '',
		companyAddress: '',
		website: '',
	};

	const formik = useFormik({
		initialValues: InitiaState,
		validateOnMount: true, // Enable validateOnMount
		validationSchema: Yup.object({
			fullName: Yup.string().required('Required'),
			phoneNumber: Yup.string().required('Required'),
			phoneNumberWork: Yup.string().required('Required'),
			email: Yup.string().email().required('Required'),
			country: Yup.string().required('Required'),
			city: Yup.string().required('Required'),
			address: Yup.string().required('Required').min(3),
			companyName: Yup.string().required('Required'),
			companyAddress: Yup.string().required('Required'),
			// website: Yup.string().required("Required"),
		}),

		onSubmit: handleSubmit,
	});
	async function handleSubmit(values, { resetForm }) {
		try {
			setloading(true);
			// const hi =  postInformation(values);
			fetch('/sendEmailRoute', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Add any other headers if needed
				},
				// body: data,
				body: JSON.stringify(values),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setloading(false);

					console.log('from signup try block');
					// if successfull set submitstatus
					toast.success(data?.message);
					submitStatus(true);
					router.push('?registrationType=true#Formsuccess', { scroll: true });
				})
				.catch((error) => {
					console.error('Error:', error);
				});

			//   toast.success(res?.message, {});

			resetForm();

			// "User already registered."
			// console.log("succesful signup!!", res);
		} catch (error) {
			// if (!error) return "No server response";

			console.log('error from contact form', error);
		}
	}
	function handleChange(e) {
		const { name, value } = e.target;
		formik.setValues((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div className="p-[1.88rem]  w-full max-w-[44.625rem] mx-auto shadow- [0px_0px_13px_0px_rgba(163,163,163,0.20)]">
			<p className="text-main_heading text-base md:text-[1.125rem] font-medium tracking-[-0.0225rem] mt-[1.56rem] mb-[1.25rem]">
				Fill in the following details
			</p>
			<form onSubmit={formik.handleSubmit}>
				<div className=" flex flex-col items-center gap-[.91rem] ">
					{registerFormField.map((item, index) => (
						<div key={item.name} className={` mb-[1.31rem] relative w-full`}>
							<span className="mb-[.5rem] inline-block text-sub_heading">
								{item.placeholder}
							</span>
							<div
								className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex flex-row  px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
							>
								{item.name === 'phoneNumber' ||
								item.name === 'phoneNumberWork' ? (
									<div className="flex divide -x">
										{/* <select>
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {getCountryCallingCode(country)}
                      </option>
                    ))}
                  </select> */}
										<input
											// <Input
											type="tel"
											name={item.name}
											//   international
											className="basis-[100%] focus:outline-0 pl-[5px] ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-black placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]"
											// className="w-full"import PhoneInput from "react-phone-number-input";
											placeholder="+234 901 xxx xxxx"
											value={formik?.values[item.name]}
											// onChange={(number) => {
											//   formik.setValues((prev) => ({
											//     ...prev,
											//     [item.name]: number,
											//   }));
											// }}
											onChange={handleChange}
											onBlur={() => {
												formik.setTouched({ [item.name]: true });
												// console.log("clicked", item.name);
											}}
										/>
									</div>
								) : item.name === 'country' ? (
									// ) : item.name === "country" || item.name === "city" ? (
									<select
										onChange={handleChange}
										name={item.name}
										value={formik?.values[item.name]}
										onBlur={() => {
											formik.setTouched({ [item.name]: true });
											// console.log("clicked", item.name);
										}}
										className="w-full"
									>
										{countriesOfProperties[item.name].map((location) => (
											<option key={location} value={location}>
												{location}
											</option>
										))}
									</select>
								) : (
									<input
										type={item.type}
										name={item.name}
										onBlur={() => {
											formik.setTouched({ [item.name]: true });
											// console.log("clicked", item.name);
										}}
										value={formik?.values[item.name]}
										placeholder={item.placeholder}
										onChange={handleChange}
										className={`  focus:outline-0 ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-black placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]`}
									/>
								)}
							</div>

							<ErrorMessageCtn>
								{formik.touched[item.name] && formik.errors[item.name]
									? formik.errors[item.name]
									: null}
							</ErrorMessageCtn>
						</div>
					))}
				</div>
				<div className="my-[1.75rem] h-[1px] w-full bg-[#E9E9E9]"></div>
				<h3 className="mb-[1.25rem] text-main_heading text-[1.125rem] tracking-[-0.0225rem] font-medium ">
					Company Details
				</h3>
				<div className=" flex flex-col items-center gap-[.91rem] w-full max-w-[44.625rem] mx-auto">
					{registerCompanyAsAgentFields.map((item, index) => (
						<div key={item.name} className={` mb-[1.31rem] relative w-full`}>
							<span className="mb-[.5rem] inline-block text-sub_heading">
								{item.placeholder}
							</span>
							<div
								className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex flex-row  px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
							>
								<input
									type={item.type}
									name={item.name}
									onBlur={() => {
										formik.setTouched({ [item.name]: true });
										// console.log("clicked", item.name);
									}}
									value={formik?.values[item.name]}
									placeholder={item.placeholder}
									onChange={handleChange}
									className={`  focus:outline-0 ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-black placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]`}
								/>
							</div>

							<ErrorMessageCtn>
								{formik.touched[item.name] && formik.errors[item.name]
									? formik.errors[item.name]
									: null}
							</ErrorMessageCtn>
						</div>
					))}
				</div>
				<button
					type="submit"
					className={`${
						formik.isValid ? 'bg-[#166BBF]' : 'bg-[rgba(222,222,222,0.35)]'
					} p-[0.625rem] relative block w-full h-[50px] lg:w-[11.3125rem] lg:ml-auto tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white`}
				>
					{isLoading ? <SmallLoadingSpinner /> : 'Continue'}
				</button>
			</form>
		</div>
	);
}

export default CompanyAsAgentForm;
