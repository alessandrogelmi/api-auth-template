# Auth API Template

A simple API Auth Template for Node.js and MongoDB projects

Routes available:
- Sign Up: `{local_url}/auth/signup`
- Sign In: `{local_url}/auth/signin`
- Refresh Token: `{local_url}/auth/refresh`
- Homepage with authentication check middleware: `{local_url}/`

## Local Setup

Clone and install dependencies: 
```
git clone https://github.com/alessandrogelmi/api-auth-template
cd api-auth-template
yarn
```
Then, rename the `env.template` file into `.env` and set your custom variables  
> **NB**. The generated `.env` file is not tracket by git - and **must remain not tracked!**
