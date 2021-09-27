import {Component} from 'react'
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import './index.css'
import { render } from '@testing-library/react';


class Header extends Component{

    state={
        name:"User",
        email:"",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU"
    }


    componentDidMount(){
        this.getUserDetails()
    }

    getUserDetails=()=>{
        const user = JSON.parse(localStorage.getItem('user'));
    if(user!== null){
        let {email,name,imageUrl}=user
        this.setState({email,name,imageUrl})
    } 
    }

    logoutFromSession=(props)=>{
        Cookies.remove('jwt_token')
        Cookies.remove('G_AUTHUSER_H')
        localStorage.removeItem("user")
        const { history } = props;
    //    history.replace("/login")
       // history.push("/Login")
       window.location.href = '/login' 
    }

    
 
 
    render(){
        const {name,email,imageUrl}=this.state
    return(
            <div>
               <aside class="side-nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <img src={imageUrl} alt="" className="profile-avatar"/>
                    </li>
                    <li class="nav-item">Welcome {name}</li>
                    <li class="nav-item" onClick={this.logoutFromSession}>Logout</li>
                </ul>
                </aside>  
            </div>

    )
}

}
export default withRouter(Header)