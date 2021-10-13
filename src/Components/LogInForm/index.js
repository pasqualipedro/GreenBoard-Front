import {React, Component} from 'react'
import Button from '../Button/index'

class LoginForm extends Component {

    state = {
        username:``,
        password:``
    }

    render(){
        return(
            <>
                <form>
                    <label>Email</label>
                    <input type="email" name={this.props.name}/>
                    <label>Password</label>
                    <input type={this.props.type}/>
                    <Button type ="submit" text = 'Enter'/>
                </form>
            </>
        )
    }
}

export default LoginForm