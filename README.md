## Logic behind stripe payment implementation

Everytime customer is in the Payment section (Payment.js) app does API call to the endpoint that was build on firebase cloud functions with express (Blaze account required) to get CLIENT SECRET. From the endpoint express server (on cloud functions) calls stripe to get CLIENT SECRET.
The reason client secret is called from the server and not front end is security (hiding stripe private key etc.)
In response API endpoint returns clientSecret back to the front end. From there frontend on submit sends payment request that contains client secret to stripe.

To test payment type in only 4 and 2 in the card details like so:

Card number 4242 4242 4242 4242
04/24
424 24242
