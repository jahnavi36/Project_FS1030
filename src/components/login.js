import React,{Component} from 'react';


import {Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
           username:'',
           password:'',
           loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const { username, password } =this.state
        if(username ==="admin" && password === "567890"){
        this.setState({
            loggedIn:true
        })
    } 
    }
           render() {
               if(this.state.loggedIn){
                   return<Redirect to="/admin"/>
               }
        return (
    
        <div className = "loginbox">
            <h2>Admin Login</h2>
            <form onSubmit={this.submitForm}>
            
            <input type="text" name="username"  placeholder="Enter Username" value={this.state.username} onChange={this.onChange}/>
            
            <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange}/>
            
            <input type = "submit"/> 
             
                  </form>
        </div>    
             
);
}
};
export default Login;