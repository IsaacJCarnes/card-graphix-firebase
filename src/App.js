import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Card from './pages/Card';


/*
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import ContactUs from './pages/contact-us/ContactUs';
import Card from './pages/card/Card';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
        <div className="sections">
          <Header />
          <div className="m-1 d-flex flex-column align-content-center justify-content-center">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/card">
              <Card />
            </Route>
            <Route exact path="/profiles/:profileId">
              <Profile />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
*/

function App() {
  return (
        <Router>
        <div className="sections">
          <Header />
          <div className="m-1 d-flex flex-column align-content-center justify-content-center">
            <Routes>
              <Route exact path={"/"} element={<About />}/>
              <Route exact path={"/card"} element={<Card />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;