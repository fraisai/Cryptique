import React, { useEffect, useRef } from 'react';
import { Route, useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleSignInSVG, GithubSignInSVG } from '../componentImports';

const SignIn = () => {
	let CLIENT_ID = '';
	const location = useLocation();
	const loginRef = useRef({
		email: '',
		password: '',
		remember: false
	});
	
	async function handleGithubLogin(e) {
		// e.preventDefault();
		console.log('github clicked');
		// window.location.href = 'https://www.github.com/login/oauth/authorize?client_id=17cfd66a744613f0d753';
		await axios.get('api/auth/github-login', {headers: {"Access-Control-Allow-Origin": "*"}}
		)
		// .then(res => window.location.href = res.data)
		.then(res => {
			console.log('res', res.request.responseUrl)
			// axios.get(res.data);
		})
		.catch(e => console.log('SignIn.jsx', e))
		
		
		// return (<div><Link to={'https://github.com/login/oauth/authorize?client_id=17cfd66a744613f0d753'}></Link></div>)
		// return redirect('https://github.com/login/oauth/authorize?client_id=17cfd66a744613f0d753')
	}

	function handleGoogleLogin() {
		console.log('google clicked');
	}

	return (
		<div className="flex flex-col pt-16 bg-gray-50 dark:bg-gray-900">
			<div className="relative w-full h-full px-6 pt-16 overflow-y-auto bg-gray-50 lg:ml-60 dark:bg-gray-900" style={{ paddingLeft: '18%', width: '100%' }}>
				<div className="max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
					<form className="space-y-6 ">
						<h5 className="pt-16 mt-16 text-xl font-medium text-gray-900 dark:text-white ">Sign in to Cryptique</h5>
						<div align='left'>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Email
							</label>
							
							<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
						</div>
						
						<div align='left'>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Password
							</label>
							<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
						</div>
						
						<div className="flex space-around" style={{ display: 'flex', justifyContent: 'space-between'}}>
							<div className="flex items-start">
								<div className="flex items-center h-5 mr-1">
									<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600" required />
								</div>
								
								<label htmlFor="remember" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
									Remember me
								</label>
							</div>
							
							<a href="" className="text-sm text-blue-700 ms-auto hover:underline dark:text-blue-500">
								Forgot Password?
							</a>
						</div>
						
						<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
							Login
						</button>				
					</form>

					{/* HORIZONTAL LINE */}
					<div className='mt-4'><hr></hr></div>


					
					<button
							onClick={handleGithubLogin} 
							className="flex items-end justify-center w-full px-1 py-1 mt-4 text-xs border border-gray-200 rounded-lg" 
							style={{ borderColor: 'rgb(229 231 235/var(--tw-border-opacity))'}}
						>
							<div className='flex mr-2' style={{height: '1.25rem', width: '1rem' }}><GithubSignInSVG /></div>
							Sign in with Github
						</button>
						
					<button 
						onClick={handleGoogleLogin} 
						className="flex items-end justify-center w-full px-1 py-1 mt-2 text-xs border border-gray-200 rounded-lg" 
						style={{  borderColor: 'rgb(229 231 235/var(--tw-border-opacity))'}}
					>
						<div className='flex mr-2' style={{height: '1.25rem', width: '1rem' }}><GoogleSignInSVG /></div>
						Sign in with Google
					</button>

					<div className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-300">
						Not registered?{' '}
						<a href="" className="text-blue-700 hover:underline dark:text-blue-500">
							Create account
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
