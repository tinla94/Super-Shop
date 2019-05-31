import React, { Component } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../styles/form/Form';
import { FormButton } from '../styles/button/Button';
import Error from '../Utils/ErrorMessage';


const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;


class RequestReset extends Component {
    state = {
      email: '',
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
          <>
            <Header />
            <Banner 
              text='"Shoes are like friends, they can support you, or take you down"'
            />
            <Mutation 
                mutation={REQUEST_RESET_MUTATION} 
                variables={this.state}>
            {(reset, { error, loading, called }) => (
              <Form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await reset();
                  this.setState({ email: '' });
                }}
              >
                <h2>Reset Password</h2>
                <fieldset disabled={loading} aria-busy={loading}>
                  <Error error={error} />
                  {!error && !loading && called && <p>Please check your email for a reset link!</p>}
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
                  <FormButton>Send Request</FormButton>
                </fieldset>
              </Form>
            )}
          </Mutation>
        </>
        )
    }
}


export default RequestReset;
