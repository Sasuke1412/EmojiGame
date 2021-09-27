import React, { Component } from "react";
import { Route, Redirect ,withRouter} from "react-router-dom";
import './index.css'

 class SignUp extends Component {

  state={fName:'',
          lName:'',
          email:'',
          password:''

        }
  setUserDetails=(event)=>{
    const {email,password,fName,lName}=this.state
    event.preventDefault();
    const user={
      email,
      password,
      lName,
      fName
    }
    //localStorage.setItem({email},user)
    localStorage.setItem({email}, JSON.stringify(user))
    this.props.history.push("/login");
  }      
  setFName=event=>{
    const fName=event.target.value
    this.setState({fName})
  }
  setLName=event=>{
    const lName=event.target.value
    this.setState({lName})
  }
  setEmail=event=>{
    const email=event.target.value
    this.setState({email})
  }
  setPassword=event=>{
    const password=event.target.value
    this.setState({password})
  }
  render() {
    return (
      <div className="signup-bg-container">
        <h1 className="sign-up-heading">Register</h1>
        <div className="sign-up-form">
      <form onSubmit={this.setUserDetails}>
        
      <div className="form-design-interior">
        <div className="fName-group">
          <label className="label-design f-name">First name</label>
          <input
            type="text"
            className="input-design "
            placeholder="First name" onChange={this.setFName}
          />
        </div>

        <div className="lName-group">
          <label className="label-design l-name">Last name</label>
          <input type="text" placeholder="Last name" className="input-design"  onChange={this.setLName} />
        </div>

        <div className="email-group">
          <label className="label-design e-mail">Email address</label>
          <input
            type="email"
            className="input-design "
            placeholder="Enter email" onChange={this.setEmail} 
          />
        </div>

        <div className="password-group">
          <label className="label-design password">Password</label>
          <input
            type="password"
            className="input-design"
            placeholder="Enter password" onChange={this.setPassword} 
          />
        </div>

        <button type="submit" className="submit-login-button">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered ? <a href="/login" className="anchor-design">Sign In</a>
        </p>
        </div>
      </form>
      </div>
      </div>
    );
  }
}
export default  withRouter(SignUp)
