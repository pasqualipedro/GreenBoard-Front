import {React, Component} from 'react'
import Button from '../Button/index'
import api from '../../Api/api.config'

class SignupForm extends Component {
    state = {
        name: "",
        lastname: "",
        age: "",
        email: "",
        password: "",
        confirmation:""
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState ({
            [name]: value
        })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.signup(this.state)
            this.props.history.push("/category/add/");
        } catch (error) {
            console.log(error);
        }

    }

    render(){
        return(
            <>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input type= "text" name = "name" value = {this.state.name} onChange = {this.handleInput}/>
                    <label>Lastname:</label>
                    <input type="text" name = "lastname" value = {this.state.lastname} onChange = {this.handleInput}/>
                    <label>Age:</label>
                    <input type = "number" name = "age" value = {this.state.age} onChange = {this.handleInput}/>
                    <label>Email:</label>
                    <input type="email" name = "email" value = {this.state.email} onChange = {this.handleInput}/>
                    <label>Password:</label>
                    <input type="password" name = "password" value = {this.state.password} onChange = {this.handleInput}/>
                    <label>Confirm Password:</label>
                    <input type="password" name = "confirmation" value = {this.state.confirmation} onChange = {this.handleInput}/>
                    <Button type = "submit" text = 'Enter'/>
                </form>
            </>
        )
    }
}

export default SignupForm