import React from "react";
import { NavLink } from "react-router-dom";
class AuthLayout extends React.Component {
  render() {
    return (
      <div>
        <p>Auth Layout</p>
        <NavLink to="/login" activeClassName="selected">
          Login
        </NavLink>
        <NavLink to="/signin" activeClassName="selected">
          Sign In
        </NavLink>
        {this.props.children}
      </div>
    );
  }
}
export default AuthLayout;
