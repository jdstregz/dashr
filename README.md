# Dashr <img alt="logo" src="client/src/assets/logo.png" width="100px"  />

A dashboard based web app template for quick prototyping

## Why

I always think of new personal project ideas. A lot of them require a dashboard,
and it's a pain to rewrite the same Node/Express/Passport/JWT/MongoDB backend logic and React/Redux/Dashboard Layout frontend every time.
So this example project is the very bare bones starting point for a full stack web app.

### Stack

- React
  - Redux ( w/ Redux Thunk/Logger middleware)
  - Material UI (core/icons/lab)
- Node
  - Express
  - Winston (Logging)
  - Passport (Local Authentication)
  - JWT Token Cookie Sessions
  - Mongoose (for MongoDB)

### To use/run

1. Clone the repo
2. in <code>/app/config/</code> create a file named <code>.env</code>
3. Open <code>.env.sample</code> and copy over the contents to <code>.env</code>
4. Add all of your environment variables here are explanations on it:

```$xslt
# PORT - what port you want your backend to run on
PORT=8888

# COOKIE_KEY: the secret you use to sign your cookies
COOKIE_KEY=blahblahblahblah

# Logging: main configuration is in config/winston.js
# LOG_LEVEL: what level you want winston to print out
# LOG_PATH: where you want your log files written to
LOG_LEVEL=debug
LOG_PATH=log

# JWT_SECRET_KEY the secret used to sign jwt tokens
JWT_SECRET_KEY=blahblahblaghblah

# DASHR DB: Database variables
# URI_PREFIX: before your username and password
# URI_SUFFIX: after your username and password
DASHR_DB_URI_PREFIX=mongodb+srv://
DASHR_DB_URI_SUFFIX=@cluster0-blah.mongodb.net/dbname?retryWrites=true&w=majority
DASHR_DB_USERNAME=username
DASHR_DB_PASSWORD=password
```

5 . Run your backend and frontend together with this command.

```cmd
$ npm run both
```

### Included Functionality

#### Authentication

Login screen with username + password. Passport Local Authentication Strategy.
JWT Token stored in production secure session cookie.

#### Middleware

I included an example of an "admin check" middleware that checks if the user is an admin before allowing certain
endpoints.

#### Redux

Redux store is set up with Redux Thunk and Redux Logger. Multiple asynchronous dispatch examples and combined reducer examples.

#### Frontend security

HOC wrapped dashboard to push out users without proper session.

#### Backend Tests

Folder with example tests + test coverage scripts.

### Frontend Tests

Gotta work on this one.

### Stripe Payment System

Gotta also work on this one, but the idea is to include routes to easily integrate stripe payments.
Id like to set up both single purchase and recurring subscriptions.

### Building + Deploying (Heroku Example)

Build scripts included. I need to add a Heroku hosting example. Will add docker example later too.

### Any Questions?

email: jdstreger@gmail.com
