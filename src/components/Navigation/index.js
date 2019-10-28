import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <ul style={{listStyle: "none"}}>
    <li className="float-left">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="float-left">
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li className="float-left">
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
     
    </li>
  </ul>
);
const NavigationNonAuth = () => (
  <ul className="" style={{listStyle: "none"}}>
    <li className="float-left">
      <Link className="pr-4" to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;