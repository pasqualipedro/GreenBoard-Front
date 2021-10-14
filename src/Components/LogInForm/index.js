import {React, Component} from 'react';
import Button from '../Button/index';
import apiConfig from '../../Api/api.config';


class LoginForm extends Component {

    state = {
        email:``,
        password:``
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await apiConfig.login(this.state);
            this.props.history.push() //adicionar a rota após o login correto
        } catch (error) {
            
        }
    }

    render(){
        return(
            <>
                <form onSubmit = {this.handleSubmit}>
                    <label>Email</label>
                    <input type = "email" name= "email" value = {this.state.email} onChange = {this.handleInput}/>
                    <label>Password</label>
                    <input type="password" name = "password" value = {this.state.password} onChange = {this.handleInput}/>
                    <Button type ="submit" text = 'Enter'/>
                </form>
            </>
        )
    }
}

export default LoginForm