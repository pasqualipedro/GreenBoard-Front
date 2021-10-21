import {React, Component} from 'react';
import { Link } from "react-router-dom";

class Button extends Component{
    render()
    {
        return(
            <>
                <button onClick =  {this.props.action} >
                    {this.props.text}
                    <Link to={this.props.endpoint} ></Link>
                </button>  
            </>
        )
    }
}

export default Button