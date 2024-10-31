'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UseMobileToggler } from '@/hooks/mobileViewQuery';
import ErrorMessageCtn from '@/components/errorMessage';
import {
	locationOfProperties,
	registerpropertFields,
} from './propertyFormFields';
import { postInformation } from '@/hooks/postRequest';
import Cookies from 'js-cookie';
import { useGetCookieData } from '@/hooks/cookieParser';
import SmallLoadingSpinner from '@/components/smLoadingSpinner';
import { toast } from 'react-toastify';
function PropertyRegisterForm({ submitStatus }) {
	const { toggleQuery, router } = UseMobileToggler();
	const [isLoading, setloading] = useState(false);
	const InitiaState = {
		no_of_properties: '',
		property_country: '',
		property_city: '',
		property_location: '',
	};
	//   formik.validateOnMount;
	const formik = useFormik({
		initialValues: InitiaState,
		validateOnMount: true, // Enable validateOnMount
		validationSchema: Yup.object({
			no_of_properties: Yup.string().required('Required'),
			property_country: Yup.string().required('Required'),
			property_city: Yup.string().required('Required'),
			property_location: Yup.string().required('Required').min(3),
		}),

		onSubmit: handleSubmit,
	});
	const clientinfo = useGetCookieData('clientinfo');
	const clientService = useGetCookieData('clientService');
	async function handleSubmit(values, { resetForm }) {
		console.log({ clientService, clientinfo, propertyInfovalues: values });
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
				body: JSON.stringify({
					...clientService,
					...clientinfo,
					// propertyInfovalues: values,
					...values,
				}),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setloading(false);
					// toast.success(data?.message);
					Cookies.remove('clientinfo');
					Cookies.remove('clientService');
					// if successfull set submitstatus
					submitStatus(true);
					router.push('?registrationType=true#Formsuccess', { scroll: true });
				})
				.catch((error) => {
					console.error('Error:', error);
				});

			resetForm();

			// "User already registered."
			// console.log("succesful signup!!", res);
		} catch (error) {
			toast.error('Failed to send information');
			// if (!error) return "No server response";

			console.log('error from contact form', error);
		}

		// try {
		//   // postInformation(values);
		//   // submitStatus(true);

		//   // router.push("?registrationType=true#Formsuccess", { scroll: true });

		//   // router.push("?selectService=true#Formsuccess");
		//   //   toggleQuery("client", "Select Service type");
		//   //   toggleQuery("selectService", true);
		//   //   toast.success(res?.message, {});

		//   resetForm();

		//   // "User already registered."
		//   // console.log("succesful signup!!", res);
		// } catch (error) {
		//   // if (!error) return "No server response";

		//   console.log("error from contact form", error);
		// }
	}
	function handleChange(e) {
		const { name, value } = e.target;
		formik.setValues((prev) => ({ ...prev, [name]: value }));
	}
	//   console.log(formik.isValid);
	return (
		<div>
			<p className="text-main_heading text-base md:text-[1.125rem] font-medium tracking-[-0.0225rem] mt-[1.56rem] mb-[1.25rem]">
				Fill in the following property details
			</p>
			<form
				onSubmit={formik.handleSubmit}
				className=" flex flex-col items-center p-[1.88rem] shadow- [0px_0px_13px_0px_rgba(163,163,163,0.20)] gap-[.91rem] w-full max-w-[44.625rem] mx-auto"
			>
				{registerpropertFields.map((item, index) => (
					<div key={item.name} className={` mb-[1.31rem] relative w-full`}>
						<span className="mb-[.5rem] inline-block">{item.placeholder}</span>
						<div
							className={` shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)]  relative flex flex-row  px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary`}
						>
							{item.name === 'property_location' ||
							item.name === 'property_city' ? (
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
							) : (
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
									{locationOfProperties[item.name].map((location) => (
										<option key={location} value={location}>
											{location}
										</option>
									))}
								</select>
							)}
						</div>

						<ErrorMessageCtn>
							{formik.touched[item.name] && formik.errors[item.name]
								? formik.errors[item.name]
								: null}
						</ErrorMessageCtn>
					</div>
				))}
				<button
					type="submit"
					className={`${
						formik.isValid ? 'bg-[#166BBF]' : 'bg-[rgba(222,222,222,0.35)]'
					} p-[0.625rem] relative h-[50px] w-full lg:w-[11.3125rem] tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white ml-auto`}
				>
					{isLoading ? <SmallLoadingSpinner /> : 'Continue'}
				</button>
			</form>{' '}
		</div>
	);
}

export default PropertyRegisterForm;
