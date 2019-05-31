import React, { Component } from 'react';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../styles/form/Form';
import { FormButton } from '../styles/button/Button';
import Error from '../Utils/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';




const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
      <Header />
      <Banner 
        text='"Good Shoes Take You Good Places!"'
      />
      <div className="form-page">
        <Mutation
          mutation={SIGNIN_MUTATION}
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
              <h2>Sign In</h2>
              <fieldset disabled={loading} aria-busy={loading}>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <p>
                  Forgot Your Password?  
                  <Link href="/resetpassword">
                    <a style={{ marginLeft: '.4rem'}}>
                      Click Here
                    </a>
                  </Link>
                </p>
                <FormButton>Sign In</FormButton>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </div>
      </>
    );
  }
}

export default Signin;