import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../styles/form/Form';
import { FormButton } from '../styles/button/Button';
import Error from '../Utils/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';
import Header from '../Header/Header';



const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: '',
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


  render() {
    return (
      <>
      <Header />
      <Mutation 
        mutation={SIGNUP_MUTATION} 
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            <h2>Sign Up</h2>
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <FormButton>Sign Up</FormButton>
            </fieldset>
          </Form>
        )}
      </Mutation>
      </>
    )
  }
}

export default Signup
