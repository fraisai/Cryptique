import React, { useEffect, useRef, useState } from 'react';
import { Route, useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleSignInSVG, GithubSignInSVG, InputCheckbox } from '../componentImports';

const SignIn = () => {
	let CLIENT_ID = '';
	const location = useLocation();
	const [remember, setRemember] = useState(false);
	const loginRef = useRef({
		email: '',
		password: '',
		remember: false,
		submitted: false
	});

	async function handleGithubLogin(e) {
		e.preventDefault();
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

	const handleGoogleLogin = () => {
		console.log('google clicked');
	}

	// const handleRegister = () => { // when create account button is clicked, user is redirected to 'localhost:8080/signup'
	// 	const nav = useNavigate();
	// 	nav('/signup');
	// }

	return (
		<div className="flex flex-col pt-16">
			<div className="flex justify-center w-full h-full pt-16 overflow-y-auto " >
				<div className="p-8 bg-white border border-gray-200 rounded-lg shadow" style={{ width: '350px'}} >
					<form className="space-y-6 ">
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
