import React, { Component } from "react";
import { Route, Redirect,withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import GoogleLogin from "react-google-login";
import './index.css'

 class Login extends Component {
  state={email:'',password:'',loginFailure:false}


  loginSuccess=()=>{   
    const { history } = this.props;

    Cookies.set("jwt_token", "jwtTkoken", {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  }

  loginFailure=()=>{
    console.log("failure")
    this.setState({loginFailure:true})
  }

  ProtectedRoute=(event)=>{
    
    event.preventDefault();
   
    const {component}=this.props
    const {email,password}=this.state
    console.log(password,email)
    const user = JSON.parse(localStorage.getItem({email}));

    if(user!==null){
      const chckEmail=email
      const chckPassWord=user.password

      if(chckEmail===email && password===chckPassWord){
      
        this.loginSuccess()
      }else{
        this.loginFailure()
      }

    }
    

    

}
 
updatePassword=event=>{
  const password=event.target.value
  this.setState({password})
}
responseGooglee=response=>{
  console.log(response)
  console.log(response.profileObj)
  if(response.tokenObj.access_token ===undefined){
    
    this.loginFailure()
  }
  else if(response.tokenObj.access_token !==undefined){
    const user=response.profileObj
   // console.log(user)
    localStorage.setItem("user", JSON.stringify(user))
    this.loginSuccess()
  }
}

redirectToSignup=()=>{
  const { history } = this.props;

    history.push("/sign-up")

}

updateEmail=(event)=>{
  const email=event.target.value
  this.setState({email})
}
  render() {
    const {loginFailure}=this.state

    const displayErrorMsg= loginFailure ? "Invalid UserName or Password" :''
  
    return (
      <div className="bg-container">
      <div className="login-form-big-container">
      <img src="https://res.cloudinary.com/ddw5fowln/image/upload/v1632322003/Capture_rpejhu.png" className="login-side-image" />
        <div className="form-decor">
      <form onSubmit={this.ProtectedRoute} className="form-design">
        <img src="https://res.cloudinary.com/ddw5fowln/image/upload/v1632251490/globe-currency-digital-artwork-georgeta-blanaru_k8kncm.png" alt="" className="header-image"/>
        <h1>Currency Convertion</h1>
        <p>Takes the sweat off You</p>
        <div className="form-design-interior">
          <div className="Email-group">
            <label className="label-design">Email address  </label>
            <input
              type="email"
              placeholder="Enter email" onChange={this.updateEmail} className="input-design"
            />
          </div>

          <div className="Password-group ">
            <label className="label-design">Password </label>
            <input
              type="password"
              placeholder="Enter password" onChange={this.updatePassword} className="input-design password-group-incline"
            />
          </div>
         <p className="error-msg-design">{displayErrorMsg}</p>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="customCheck1"
              className="remember-check-button-design"
            />
            <label className="custom-control-label" htmlFor="customCheck1" >
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="submit-login-button">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/forgot-password" className="forgot-password-design">password?</a>
        </p>
      </form>
      <div className="button-container">
      <GoogleLogin clientId="654005262257-0fddti4fgmi0g6ubpagti87da76k1tk8.apps.googleusercontent.com" buttonText="Login" onSuccess={this.responseGooglee} onFailure={this.responseGooglee} cookiePolicy={'single_host_origin'} />
      <button type="button" className="register-login-button" onClick={this.redirectToSignup}>
          Register 
        </button>
      </div>
      </div>
     
      </div>
      </div>
    );
  }
}
export default Login
