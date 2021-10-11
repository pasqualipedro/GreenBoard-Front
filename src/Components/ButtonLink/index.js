import {React, Component} from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.button`
    background-color: rgba(145,255,191,100);
    border-radius: 5px;
    border: 2px solid rgba(38,173,95,68);
    margin: 1em;
    padding: 0.25em 1em;

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`;

class ButtonLink extends Component{
    render(){
        return(
            <Wrapper>
                <Link to={this.props.endpoint}>{this.props.text}</Link>
            </Wrapper>
        )
    }
}

export default ButtonLink