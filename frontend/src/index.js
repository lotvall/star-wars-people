import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider } from 'react-apollo'
import { client } from './Apollo'
import Layout from './routes/index'



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));