import {React, Component} from 'react'
import Button from '../Button/index'

class SignupForm extends Component {
    render(){
        return(
            <>
                <div>
                    <label>Name:</label>
                    <input type={this.props.type}/>
                    <label>Lastname:</label>
                    <input type={this.props.type}/>
                    <label>Age:</label>
                    <input type={this.props.type}/>
                    <label>Email:</label>
                    <input type={this.props.type}/>
                    <label>Password:</label>
                    <input type={this.props.type}/>
                    <label>Confirm Password:</label>
                    <input type={this.props.type}/>
                    <Button text = 'Enter'/>
                </div>
            </>
        )
    }
}

export default SignupForm