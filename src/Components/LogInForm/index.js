import {React, Component} from 'react';
import api from '../../Api/api.config';
import ButtonLink from '../ButtonLink';
import styled from 'styled-components'

const Container = styled.div`
    {props.className};
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 20px; 
    @media only screen and (min-width: 290px) and (max-width: 550px) {
        padding: 8px;
        footer{
        margin-top: 10px;
        flex-direction: column
        }
        footer div div a svg {
        font-size: 22px
        }
        footer div h3{
        font-size: 17px
        }
        footer div h5{
        font-size: 16px
        }
    }
    @media only screen and (min-width: 550px) and (max-width: 720px) {
        footer{
        margin-top: 20px;
        flex-direction: column
        }
        footer div div a svg {
            font-size: 30px
        }
        footer div h3{
            font-size: 22px
        }
        footer div h5{
            font-size: 19px
        }
    }
`

class LoginForm extends Component {

    state = {
        email:``,
        password:``
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.login(this.state);
            this.props.history.push("/dashboard"); //adicionar a rota após o login correto
        } catch (error) {
            console.log(error.message);    
        };
    };

    render(){
        return(
            <>
                <div style={{backgroundColor:'#C1FAE3'}}>
                    <Container>
                        <form onSubmit={this.handleSubmit} className= 'd-flex flex-column'>
                            <label className='p-1'><b>Email:</b></label>
                              <input type="email" name="email" value = {this.state.email} onChange={this.handleInput}/>
                            <label className = 'p-1'><b>Password:</b></label>
                              <input type="password" name = "password" value={this.state.password} onChange={this.handleInput}/>
                            <ButtonLink className='text-center' type="submit" text='Enter'/>
                        </form>
                    </Container>
                </div>
            </>
        )
    }
}

export default LoginForm