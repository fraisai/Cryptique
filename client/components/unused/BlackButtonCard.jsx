import React from 'react';
{
	/* material tailwind */
}

const BlackButtonCard = () => {
	return (
		<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6 w-96">
			<div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-blue-gray-500 text-white shadow-blue-gray-500/40 shadow-lg -mt-6 relative h-56">
				<img className="object-scale-down" src="https://assets.coingecko.com/coins/images/32528/large/memecoin_%282%29.png?1698912168" alt="card-image" />
			</div>

			<div class="p-6">
				<h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">UI/UX Review Check</h5>

				<p class="block antialiased font-sans text-base font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.</p>
			</div>

			<div class="p-6 pt-0">
				<button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
					Read More
				</button>
			</div>
		</div>
	);
};

export default BlackButtonCard;
