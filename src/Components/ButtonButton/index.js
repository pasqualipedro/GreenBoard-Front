import {React, Component} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(145,255,191,100);
    border-radius: 5px;
    border: 2px solid rgba(38,173,95,68);
    margin: 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    color: black;
    font-weight: bold;
`

class ButtonButton extends Component{
    render()
    {
        return(
            <Container>
                <button onClick={this.props.action} >
                    {this.props.text}
                    <Link to={this.props.endpoint} ></Link>
                </button>  
            </Container>
        )
    }
}

export default ButtonButton