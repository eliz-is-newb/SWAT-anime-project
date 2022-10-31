TODO

1. create a react component for the Login form
2. Login form sends POST request, gets back the token
3. token gets stored in JavaScript client somewhere (ex. localstorage)
4. Set either global state / redux to hold the logged in user as state
5. assuming that works, redirect the user to profile page with the navigate() function
6. You should now be logged in until you clear the token from the client
7. When the root component (probably) loads, you need to check if there's a
   token. If there is, set global state/ redux like you did in step 4. otherwise
   redirect the user to the homepage