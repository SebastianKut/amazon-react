# Recreation of AMAZON Full Stack WebApp with React JS and Stripe Payments

This Amazon clone was build using React JS, Node JS, Express and CSS. It itegrates Stripe payments, authentication and was deployed on Firebase.

It utilizes modern ReactJS concepts such as functional components, Hooks, Context Api and reducer for global state management as well as React Router.

The website is fully responsive and tries to recreate current Amazon's design concepts.

## Demo Login credentials

To log in as a client you can use following credentials:

email: test@email.com
passowrd: test1234

## Card Details

To test stripe payment enter following Test Credit Card details:

Card number: 4242 4242 4242 4242
Exp: 04/24
CVC: 424
ZIP: 24242

## Logic behind stripe payment implementation

Everytime customer is in the Payment section (Payment.js) app does an API call to the endpoint that was build on firebase cloud functions with express (Blaze account required) to get CLIENT SECRET. From the endpoint express server (on cloud functions) calls stripe to get CLIENT SECRET.
The reason client secret is called from the server and not front end is security (hiding stripe private key etc.)
In response API endpoint returns clientSecret back to the front end. From there frontend on submit sends payment request that contains client secret to stripe.
