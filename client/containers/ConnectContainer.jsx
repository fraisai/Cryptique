import React from 'react';
import ChatContainer from './ChatContainer';
const ConnectContainer = () => {
	return (
		<div className="flex justify-center" style={{ width: '100%' }}>
			<div className="relative h-full overflow-y-auto bg-gray-50 ">
				<div className="px-6 pt-6" >
					{/* px-4 => padding-left && padding-right = 1rem = 16px, pt-6 => padding-top = 1.5rem = 24px */}
					<div className="grid gap-4 xl:grid-cols-1 2xl:grid-cols-1">
						{/* xl = responsive 1280px	@media (min-width: 1280px) { ... } */}
						<ChatContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConnectContainer;
