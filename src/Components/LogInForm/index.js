import {React, Component} from 'react'
import Button from '../Button/index'

class LoginForm extends Component {
    render(){
        return(
            <>
                <div>
                    <label>Email</label>
                    <input type={this.props.type}/>
                    <label>Password</label>
                    <input type={this.props.type}/>
                    <Button text = 'Enter'/>
                </div>
            </>
        )
    }
}

export default LoginForm