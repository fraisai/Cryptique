import React, { useEffect, useRef, useState, createContext } from 'react';
import { Route, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleSignInSVG, GithubSignInSVG, InputCheckbox } from '../componentImports';

export const AuthContext = createContext();


const SignIn = ({locationSearch}) => {
	const [remember, setRemember] = useState(false);
	const loginRef = useRef({
		email: '',
		password: '',
		remember: false,
		submitted: false
	});
	const [githubRedirect, setGithubRedirect] = useState(false);

	async function handleGithubLogin(e) {
		e.preventDefault();
		alert('Redirecting to Github authorization page.');
		const { data } = await axios.get('api/auth/github-login');
		if (data.status === 'success') {
			window.location.replace(data.redirect);
			var query = window.location.search.substring(1);
		}
	}

	const handleGoogleLogin = () => {
		console.log('google clicked');
		alert('Sign in using Github (for now).');
		return;
	}

	const handleFormSubmit = () => {
		alert('Sign in using Github (for now).');
		return;
	}

	return (
		<div className="flex flex-col pt-16">
			<div className="flex justify-center w-full h-full pt-16 overflow-y-auto " >
				<div className="p-8 bg-white border border-gray-200 rounded-lg shadow" style={{ width: '350px'}} >
					<form className="space-y-6" onSubmit={handleFormSubmit}>
						<h5 className="pt-1 text-xl font-medium text-gray-900">Sign in to Cryptique</h5>
						<div align='left'>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
								Email
							</label>
							
							<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
						</div>
						
						<div align='left'>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
								Password
							</label>
							<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5" required minLength={3}/>
						</div>
						
						<div className="flex space-around" style={{ display: 'flex', justifyContent: 'space-between'}}>
							<div className="flex items-start">
								<div className="flex items-center h-5 mr-1">
									<InputCheckbox 
										checkedVal={loginRef.current.checked}
										handleCheckChange={setRemember}
										formData={{...loginRef.current}}
									/>
								</div>
								
								<label htmlFor="remember" className="text-sm font-medium text-gray-900 ms-2">
									Remember me
								</label>
							</div>
							
							<Link to="/" className="text-sm text-blue-700 ms-auto hover:underline">
								Forgot Password?
							</Link> 
						</div>
						
						<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loginRef.current.submitted}>
							Login
						</button>				
					</form>

					{/* HORIZONTAL LINE */}
					<div className='mt-4'><hr></hr></div>
					
					{/* GITHUB SIGNIN */}
					<button
						onClick={handleGithubLogin} 
						className="flex items-end justify-center w-full px-1 py-1 mt-4 text-xs border border-gray-200 rounded-lg" 
						style={{ borderColor: 'rgb(229 231 235/var(--tw-border-opacity))'}}
					>
						<div className='flex mr-2' style={{height: '1.25rem', width: '1rem' }}><GithubSignInSVG /></div>
						Sign in with Github
					</button>
					
					{/* GOOGLE SIGNIN */}
					<button 
						onClick={handleGoogleLogin} 
						className="flex items-end justify-center w-full px-1 py-1 mt-2 text-xs border border-gray-200 rounded-lg" 
						style={{  borderColor: 'rgb(229 231 235/var(--tw-border-opacity))'}}
					>
						<div className='flex mr-2' style={{height: '1.25rem', width: '1rem' }}><GoogleSignInSVG /></div>
						Sign in with Google
					</button>

					<div className="mt-4 text-sm font-medium text-gray-500">
						Not registered?{' '}
						<Link to="/signup">
							<button className="text-blue-700 hover:underline">
								Create account
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
