import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
                <p>
                  This is a template that you can use to demonstrate an error in
                  Apollo Client. Edit the source code and watch your browser window
                  reload with the changes.
                </p>
                <p>
                  The code which renders this component lives in{" "}
                  <code>./src/App.js</code>.
                </p>
                <p>
                  The GraphQL schema is in <code>./src/graphql/schema</code>.
                  Currently the schema just serves a list of people with names and
                  ids.
                </p>
          </header>
          <Query
            query={gql(`
              query ErrorTemplate {
                people {
                  id
                  name
                }
              }`)}
              pollInterval={300}
              fetchPolicy='cache-and-network'
              notifyOnNetworkStatusChange={true}
            >
            {({error, data, loading}) => {
              const {people} = data;
              if (loading) return <p>Loading...</p>;
              if (error) return <p>ERROR: {error}</p>;
              return (
                <ul>
                  {people.map(person => <li key={person.id}>{person.name}</li>)}
                </ul>
              );
            }}
          </Query>
      </main>
    );
  }
}

export default App;
