import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { membershipData } from './membershipData';
import { useState } from 'react';

export default function MembershipPlans() {
	const [clickedCard, setClickedCard] = useState(membershipData[0].value);

	const getTitleColor = (planValue) => {
		switch (planValue) {
			case 'classic':
				return 'bg-[#f4f4f4]';
			case 'gold':
				return 'bg-[#f4f4f4]';
			case 'platinum':
				return 'bg-[#f4f4f4]';
			default:
				return '';
		}
	};

	return (
		<div className="flex w-full flex-col items-center justify-center">
			{/* Tabs layout for screens smaller than xl */}
			<h1
				className='text-center mb-2 font-bold text-2xl md:text-4xl'
			>
				ANNUAL MEMEBERSHIP PLAN
			</h1>
			  <h2  className='text-center mb-7 md:mb-10 font-bold text-base'> 
			  (Africans in the Diasporians)
			  </h2>

			<Tabs
				defaultValue="classic"
				className="xl:hidden flex w-[95vw] flex-col items-start justify-center sm:w-[80vw]"
			>
				<TabsList className="grid h-auto w-full grid-cols-3 gap-2 bg-inherit text-white md:gap-4">
					{membershipData.map((plan) => (
						<TabsTrigger
							key={plan.value}
							value={plan.value}
							onClick={() => setClickedCard(plan.value)}
							className={`flex h-32 items-start justify-start rounded-xl border ${getTitleColor(
								plan.value
							)} data-[state=active]:font-bold data-[state=active]:text-xl data-[state=active]:border-t-8 data-[state=active]:border-red-600 text-black data-[state=active]:${getTitleColor(plan.value)} font-medium border-stone-300 px-1 py-3`}
						>
							<p className="relative h-full w-full text-left  text-xl p-1 md:p-2">
								{plan.title} <br />
								<span className="text-base">{plan.subtitle}</span>
								<CheckCircle2
									className={`absolute bottom-0 right-0 ${
										clickedCard === plan.value ? 'block' : 'hidden'
									}`}
								/>
							</p>
						</TabsTrigger>
					))}
				</TabsList>

				{membershipData.map((plan) => (
					<TabsContent key={plan.value} value={plan.value}>
						<Card className="mt-5 h-full w-[95vw] sm:w-[80vw] border-none">
							<CardContent className="gap-2 px-1 sm:p-0">
								{plan.details?.map((detail, index) => (
									<div
										key={index}
										className={`flex justify-between lg:text-lg text-stone-600 ${
											index !== plan.details.length - 1 &&
											'border-b border-stone-400'
										} py-3`}
									>
										<p className="h-auto max-w-[45%]">{detail.title}</p>
										<p className="max-w-[45%] text-end font-bold">
											{detail.content}
										</p>
									</div>
								))}
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>

			{/* Card layout for xl and larger screens */}
			<div className="hidden w-full xl:flex justify-center gap-6">
				{membershipData.map((plan) => (
					<Card key={plan.value} className="w-[30%] border rounded-2xl">
						<CardHeader
							className={`rounded-xl m-2 ${getTitleColor(
								plan.value
							)}`}
						>
							<CardTitle className=" flex-row flex justify-between items-center "><p className='text-2xl font-bold'>{plan.title}</p>
								<p className="text-3xl font-semibold">{plan.subtitle}</p>
							</CardTitle>
						</CardHeader>
						<CardContent>
							{plan.details?.map((detail, index) => (
								<div
									key={index}
									className={`grid grid-cols-2 h-20 text-stone-600 ${
										index !== plan.details.length - 1 &&
										'border-b border-stone-400'
									} py-1.5 items-center justify-center`}
								>
									<p className="text-left">{detail.title}</p>
									<p className="text-end font-bold">{detail.content}</p>
								</div>
							))}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
