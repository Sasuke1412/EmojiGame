import React, { Component } from "react";
import './index.css'

export default class Login extends Component {
  render() {
    return (
      <div className="not-found">
         <img src="https://res.cloudinary.com/ddw5fowln/image/upload/v1632303743/ezgif.com-gif-maker_vui1zj.gif" alt="" className="thanos-gif" />
        <div className="thanos-snap-description"> 
        <h1>Oh Snap, <br/> The page you have been looking for has been erased by Thanos <br/> </h1>       
            <button type="button" className="notfound-design">
              <a className="goback" href="/" className="anchor-remover" > Go-Back
              </a>
            </button>
        </div>  
        
      </div>
    )
  }
}