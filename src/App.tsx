import React from 'react';
import './App.css';
import { MainPage } from './pages/MainPage';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HashRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

const AppEl = styled.div`
  min-width: 100vw;
  min-height: 100vw;
`

function App() {
  return (
    <AppEl>
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" component={MainPage} />
        </Router>
      </ApolloProvider>
    </AppEl>
  );
}

export default App;
