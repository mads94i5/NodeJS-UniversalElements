# Login Template

This login template site is a mandatory assignment for the NodeJS elective subject at KEA 2023. 
It is designed with seperate frontend and backend.
The frontend uses Svelte+Vite, toasts and svelte-routing
The backend uses JWT auth system, MySQL database, helmet, bcrypt, cors, ratelimit and nodemailer w/ ethereal.mail on registration.
It also features the concurrently node module, to start both the frontend and backend with a single npm run command from the root directory.

## Assignment

Mandatory II

Create a fullstack auth system using a web framework.

Hand-in: Git Link, Fronter

Assignment type: Individual

Recommended: Try to hack each other’s local system for security auditing and do code reviews of the security sensitive parts.

Deadline: November 12th

Technical requirements:

· Use a web framework.

· Use a database.

· Email should be sent out with Nodemailer. This can be done through sign up/forgot password/contact us. Only 1 email is required but all the requirements would be nice.

· Add notifications. The project should have at least one. You could use one of these libraries: https://github.com/CodeSeven/toastr https://github.com/kbrgl/svelte-french-toast

· Backend:

You need to implement authentication:

Implement it yourself with Bcrypt, route etc. You could consider a library or a service such as Passport.js, Google SSO, OAuth or Firebase Authenticate.

You need to implement authorization.

Use sessions (easy), JWT (difficult). Good video on how to implement JWT with Express: https://www.youtube.com/watch?v=mbsmsi7l3r4

· Frontend:

You need to implement authentication too:

The minimum requirement is a Login/Sign out component. (Sign up/Forgot password are optional).

You need to implement authorization here too:

Protect your routes. If you are using svelte-navigator use private routes so people can’t access pages by changing the URL. You could use this: https://github.com/mefechoel/svelte-navigator/tree/main/example/private-routes

Bonus

· Feel free to add a theme to the website, a frontpage and content once logged in.