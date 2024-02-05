https://github.com/settings/applications/2466811
Why we get rid of Strict mode:
    - 1st Render: use one time authorization code to get access token
    - 2nd Render: reuse the one time code which results in an error message from server
1. Get rid of React Strict Mode

2. User login process with Github2.0
    - forward the user to the github login screen with the client ID
    - User is now directed to github where theyre able to log in
    - After user logs in, user gets forwarded back to localhost:8080/?code=AUTH_CODE
        - when the code exists in our localhost link, that is when our app knows that the user has been authenticated
    - Use the auth code to get the access token (auth code can only be used ONCE)
