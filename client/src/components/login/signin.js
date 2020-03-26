import React, { Component } from 'react'
import Image from "../../images.png";
import "./style.scss";
import { withRouter } from "react-router-dom";
import  { registerUser } from '../../action/listaction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import classnames from "classnames";

 class Signin extends Component {
  constructor(props) {
    super(props);
    this.state={
        name:"",
        email:"",
        password:"",
        errors:{},
    }
    this.handlechange=this.handlechange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    
          if (this.props.auth.isAuthenticated) {
            this.props.history.push("/list");

          }
   
  }

  componentWillReceiveProps(nextProps) {
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
  const newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
  };
console.log(newUser);
this.props.registerUser(newUser, this.props.history); 


}
  render() {
    const { errors } = this.state;

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={Image} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
              <input type="text"
                     name="name" 
                     error={errors.name}
                     className={classnames("", {
                    invalid: errors.name
                  })} 
                    value={this.state.name}
                     onChange={this.handlechange} 
                     placeholder="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
              <input type="text" className={classnames("", {
                    invalid: errors.email
                  })} name="email" error={errors.email}  value={this.state.email} onChange={this.handlechange} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
              <input type="text" name="password" error={errors.password} className={classnames("", {
                    invalid: errors.password
                  })} value={this.state.password} onChange={this.handlechange} placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.handleSubmit} className="btn" >
            Register 
          </button>
        </div>
      </div>
    );
  }
}
Signin.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signin));