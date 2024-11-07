'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'react-phone-number-input/input';
import ErrorMessageCtn from '../errorMessage';
import { UseMobileToggler } from '@/hooks/mobileViewQuery';
import { postInformation } from '@/hooks/postRequest';
import SmallLoadingSpinner from '../smLoadingSpinner';
import { toast } from 'react-toastify';

function TalkToConsultantForm({ submitStatus }) {
	const { toggleQuery, router } = UseMobileToggler();
	const [isLoading, setloading] = useState(false);

	const InitiaState = {
		email: '',
		phoneNumber: '',
	};

	const formik = useFormik({
		initialValues: InitiaState,
		validateOnMount: true, // Enable validateOnMount
		validationSchema: Yup.object({
			email: Yup.string().email().required('Required'),
			phoneNumber: Yup.string().required('Required'),
		}),
		onSubmit: handleSubmit,
	});

	async function handleSubmit(values, { resetForm }) {
		try {
			setloading(true);
			fetch('/sendEmailRoute', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
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
					toast.success(data?.message);
					submitStatus(true);
					router.push('?consultation=true#Formsuccess', { scroll: true });
				})
				.catch((error) => {
					console.error('Error:', error);
				});

			resetForm();
		} catch (error) {
			console.log('error from contact form', error);
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		formik.setValues((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<div>
			<p className="text-main_heading text-base md:text-[1.125rem] font-medium tracking-[-0.0225rem] mt-[1.56rem] mb-[1.25rem]">
				Fill in the following details
			</p>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col items-center p-[1.88rem] shadow-[0px_0px_13px_0px_rgba(163,163,163,0.20)] gap-[.91rem] w-full max-w-[44.625rem] mx-auto"
			>
				<div className="mb-[1.31rem] relative w-full">
					<span className="mb-[.5rem] inline-block">Email</span>
					<div className="shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)] relative flex flex-row px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary">
						<input
							type="email"
							name="email"
							onBlur={() => {
								formik.setTouched({ email: true });
							}}
							value={formik?.values.email}
							placeholder="Email"
							onChange={handleChange}
							className="focus:outline-0 ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-black placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]"
						/>
					</div>
					<ErrorMessageCtn>
						{formik.touched.email && formik.errors.email ? formik.errors.email : null}
					</ErrorMessageCtn>
				</div>

				<div className="mb-[1.31rem] relative w-full">
					<span className="mb-[.5rem] inline-block">Phone Number</span>
					<div className="shadow-[0px_2px_4px_0px_rgba(192,192,192,0.25)] relative flex flex-row px-[0.94rem] py-[0.5rem] rounded-[0.5rem] border border-solid border-[rgba(229,229,229,0.60)] focus-within:border-primary">
						<input
							type="tel"
							name="phoneNumber"
							className="basis-[100%] focus:outline-0 pl-[5px] ml-[0.19rem] bg-transparent block w-full font-normal placeholder:tracking-[0.01744rem] tracking-[0.01744rem] placeholder:leading-[1.41713rem] leading-[1.41713rem] text-black placeholder:text-[0.87206rem] text-[0.87206rem] lg:text-[1.125rem]"
							placeholder="+234 901 xxx xxxx"
							value={formik?.values.phoneNumber}
							onChange={handleChange}
							onBlur={() => {
								formik.setTouched({ phoneNumber: true });
							}}
						/>
					</div>
					<ErrorMessageCtn>
						{formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : null}
					</ErrorMessageCtn>
				</div>

				<button
					type="submit"
					className={`${
						formik.isValid ? 'bg-[#166BBF]' : 'bg-[rgba(222,222,222,0.35)]'
					} p-[0.625rem] relative h-[50px] w-full lg:w-[11.3125rem] tracking-[-0.0225rem] font-semibold rounded-[6.25rem] text-[1.125rem] text-white ml-auto`}
				>
					{isLoading ? <SmallLoadingSpinner /> : 'Continue'}
				</button>
			</form>
		</div>
	);
}

export default TalkToConsultantForm;
