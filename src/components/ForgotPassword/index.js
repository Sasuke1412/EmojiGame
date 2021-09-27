import React, { Component } from "react";
import { withRouter } from "react-router";
import './index.css'



 class ForgotPassword extends Component {

  state={forgotClick:false,email:'',typedFullName:'',isWrongCreds:false}

  forgotPasswordButtonClicked=event=>{
    event.preventDefault();

    this.setState(prevState => ({
      forgotClick: true
    }));
    

  }
  emailSet=(event)=>{
    const email=event.target.value
    this.setState({email})
  }

  getNewPassword=()=>{
    return prompt("Enter new password")
  }

  validationProcessOn=(event)=>{
    event.preventDefault()
    const {email,typedFullName}=this.state
    const user = JSON.parse(localStorage.getItem({email}));
    const {lName,fName}=user
    const fullName=fName+lName;
    if( typedFullName===fullName){
      const newPassword=this.getNewPassword()
      user.password=newPassword
      localStorage.setItem({email}, JSON.stringify(user))
    }
    else{
      this.setState({isWrongCreds:true})
    }

  }

  verification=(event)=>{
    const typedFullName=event.target.value
    const {email}=this.state
    this.setState({typedFullName:typedFullName})
    
    
  }
  redirectToLogin=()=>{
    const{history}=this.props
    history.push('/login')
  }

  CheckFirstNameLastName=()=>{

    return(
      <div>
        <form onSubmit={this.validationProcessOn} className="verification-form">
          <div className="align-items">
        
         <input  className="input-design-forgot-password width-adjust-for-verfication" placeholder="Your firstName and Last name seperated by Space" onChange={this.verification}/>
        </div>
        <button type="submit" className="submit-verification">Submit for verification</button>
        </form>
      </div>
    )
  }

  render() {
    const {forgotClick,isWrongCreds}=this.state
    const verificationEmailSent= forgotClick ? " Enter your First Name and Last Name for verification" :''
    return (
      <div>
      <form onClick={this.forgotPasswordButtonClicked}>
        <img src="data:image/png;base64,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" alt="" className="forgot-password-banner" />
        <h1>Forgot Password ?</h1>
        <h3>Enter your E-mail to retreive your Account </h3>
        <div className="form-group">
          <label className="label-design">Email address</label>
          <input
            type="email"
            onChange={this.emailSet}
            placeholder="Enter email" className="input-design-forgot-password"
          />
        </div>

        <button type="submit" className="forgot-password-button-design" >
          Submit
        </button>
      </form>
      
      {forgotClick? this.CheckFirstNameLastName():''}
      {isWrongCreds?<p>Wrong Credentials</p>:''}

      <button type="button" className="redirectToLogin" onClick={this.redirectToLogin}>Remember Your Password?</button>
      </div>
    );
  }
}

export default withRouter(ForgotPassword)