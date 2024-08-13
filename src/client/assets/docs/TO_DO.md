1. SignupContainer.jsx: 
    - Fix validate password (line 16) => add dropdown error message if password is invalid
    - Add terms & conditions page: Terms and Condition
2. Protected routes; https://medium.com/@stheodorejohn/implementing-automatic-redirects-after-login-in-react-protected-routes-b5bac2056400




https://www.svgrepo.com/vectors/social-media/monocolor/

Settings Levels
        <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
        </a>





https://reactnative.dev/docs/layout-props?language=javascript: onPress={() => setSquares([...squares, <Square />])}




https://github.com/settings/applications/2466811
Why we get rid of Strict mode:
    - 1st Render: use one time authorization code to get access token
    - 2nd Render: reuse the one time code which results in an error message from server

- useLocation from react-router lets you get the location object
    - location.hash = hash of current URL
    - location.key = unique key for location
    - location.pathname = path of current URL
    - location.search = query string of current URL
    - example: {
        key: 'ac3df4', // not with HashHistory!
        pathname: '/somewhere',
        search: '?some=search-string',
        hash: '#howdy',
        state: {
            [userDefined]: true
        }
    }

        import { useLocation } from 'react-router-dom';

        function App() {
            let location = useLocation();

            React.useEffect(() => {
                // Google Analytics
                ga('send', 'pageview');
            }, [location]);

            return ();
        }



1. Get rid of React Strict Mode

2. User login process with Github2.0
    - forward the user to the github login screen with the client ID
    - User is now directed to github website where theyre able to log in (github.com/login/oauth)
    - After user logs in, user gets forwarded back to localhost:8080/?code=AUTH_CODE
        - when the code exists in our localhost link, that is when our app knows that the user has been authenticated
    - Use the auth code to get the access token (auth code can only be used ONCE)



CRYPTIQUE
1. Create dockerfile
2. create AWS Copilot app using command: copilot app init
    - command line interface that makes it easy for developers to build, release, and operate production-ready containerized applications on AWS App Runner, Amazon ECS, and AWS Fargate
3. Figure why server is unable to get json data (look into npm run start command - what should the server location be?)


