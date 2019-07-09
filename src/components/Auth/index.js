import React from "react";
import { Login, SignUp, Wrapper } from "./components";

class Auth extends React.Component {
  state = {
    isLogin: true
  };

  toggleScreen = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  };

  render() {
    return (
      <Wrapper>
        {this.state.isLogin ? <Login toggleScreen={this.toggleScreen} /> : <SignUp toggleScreen={this.toggleScreen} />}
      </Wrapper>
    );
  }
}

export default Auth;
