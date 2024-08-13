import React from 'react';
import { Link } from 'react-router-dom'
import { FacebookIconSVG, InstagramIconSVG, TwitterIconSVG } from '../componentImports';
const iconLinkClassName = `text-gray-500 hover:text-gray-900`;
const footerLinkClassName = `mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6`;


const Footer = ({ pl = '19%' } ) => {
	return (
		<div className="flex flex-col w-full pt-16 bg-gray-50 ">
			<div className="relative w-full h-full px-6 pt-6 overflow-y-auto shrink bg-gray-50 lg:ml-64" style={{ paddingLeft: `${pl}`, width: '100%' }}>
				<div className="w-screen p-4 mx-2 my-6 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8">
					<ul className="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
						<li>
							<Link to={'/terms-conditions'} className={`${footerLinkClassName}`}>
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link to={'/terms-conditions'} className={`${footerLinkClassName}`}>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to={'/terms-conditions'} className={`${footerLinkClassName}`}>
								Contact
							</Link>
						</li>
					</ul>

					<div className="flex space-x-6 sm:justify-center">
						<Link to="/login" className={`${iconLinkClassName}`}>
							<FacebookIconSVG />
						</Link>
						
						<Link to="/login" className={`${iconLinkClassName}`}>
							<InstagramIconSVG />
						</Link>
						
						<Link to="/login" className={`${iconLinkClassName}`}>
							<TwitterIconSVG />
						</Link>
					</div>
				</div>

				<p className="my-10 text-sm text-center text-gray-500">
					© 2022{' '}
					<Link href="https://cryptique.com/" className="hover:underline" target="_blank">
						Cryptique
					</Link>
					. Created by F. Raisa Iftekher.
				</p>
			</div>
		</div>
	);
};

export default Footer;
