import React from "react";
import axiosClient from "../../utils/axiosClient";
class AuthLayout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default AuthLayout;
