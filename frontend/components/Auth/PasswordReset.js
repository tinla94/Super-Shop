import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';



const PASSWORD_RESET_MUTATION = gql`
  mutation PASSWORD_RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;


class PasswordReset extends Component {
    static propTypes = {
        resetToken: PropTypes.string.isRequired,
    };

    state = {
        password: '',
        confirmPassword: '',
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
<Mutation
        mutation={PASSWORD_RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(reset, { error, loading, called }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              this.setState({ password: '', confirmPassword: '' });
            }}
          >
            <h2>Enter New Password</h2>
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
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

              <label htmlFor="confirmPassword">
                Confirm Your Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Reset Your Password!</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )}
}


export default PasswordReset;
