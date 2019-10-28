import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="backbod">
        <div className="signin-box px-4 py-3">
          <h3 className="text-muted">SignIn</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control py-4"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input 
                className="form-control py-4"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              /> <PasswordForgetLink />
            </div>
            <div className="text-right">
              <button
                className="btn btn-large btn-signin "
                disabled={isInvalid}
                type="submit"
              >
                Sign In
              </button>
            </div>
            {error && <p>{error.message}</p>}
          </form>
          <SignUpLink />
         
        </div>
      </div>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);
export default SignInPage;
export { SignInForm };
