import React, { Component } from 'react'
import Image from '../../images.png'
import { withRouter } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../action/listaction";
import classnames from "classnames";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            errors:{}

        }
        this.handlechange=this.handlechange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

      }

      componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/profile");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/profile"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
      handlechange(e){
          this.setState({
            [e.target.name]:e.target.value

          })
      }
      handleSubmit(e){
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password,
        };
      console.log(userData);
      this.props.loginUser(userData);
      }
      
    render() {
      const { errors } = this.state;

        return (
            <div className="base-container"  ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={Image} />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">E-mail</label>
                  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                  <input type="email" name="email" error={errors.email}  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })} value={this.state.email} onChange={this.handlechange} placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                  <input type="password" name="password" error={errors.password} className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}  value={this.state.password} onChange={this.handlechange} placeholder="password" />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button"  onClick={this.handleSubmit} type="submit" className="btn">
                Login
              </button>
            </div>
          </div>
        )
    }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));