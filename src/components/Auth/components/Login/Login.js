import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions";

import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form 
        className="login-form"
        onSubmit={this.handleSubmit}
      >
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <Button onClick={this.props.toggleScreen}>Or register here!</Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(login(loginData))
});

const Login = Form.create({})(LoginForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
