import {React, Component} from 'react';
import styled from 'styled-components';

const Container = styled.button`
        background-color: rgba(145,255,191,100);
        border-radius: 5px;
        border: 2px solid rgba(38,173,95,68);
        margin: 1em;
        text-direction: center;
        text-decoration: none;
        color: black;
        font-weight: bold;
        
`;

class ButtonButton extends Component{
    render()
    {
        return(
            <Container>
                <span onClick={this.props.action} style={{padding: '3 14'}}>{this.props.text}</span>                  
            </Container>
        )
    }
}

export default ButtonButton