import React from 'react';
import { ErrorPage } from '../componentImports';

const NewsContainer = () => {
	return (
		<div className="flex justify-center pr-6 bg-gray-50" style={{ height: '150%'}}>
			<div className="px-6 pt-6" style={{ width: '100%', margin: '0 auto' }}>
				{/* <div className="grid w-full gap-4 xl:grid-cols-1 2xl:grid-cols-1"> */}
					<ErrorPage />
				{/* </div> */}
			</div>
		</div>
	);
};

export default NewsContainer;
