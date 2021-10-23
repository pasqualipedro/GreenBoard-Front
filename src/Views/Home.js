import React from 'react';
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer';
import styled from 'styled-components'

const Container = styled.div`
  {props.className};
  padding: 48px;
  @media only screen and (min-width: 290px) and (max-width: 550px) {
    padding: 8px;
    footer{
      margin-top: 20px;
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

const Home = () => {
    return (
        <>
            <NavbarPublic/>
            <h1>GREENBOOK</h1>
            <Container>
            <p> Greenbook é um aplicação web dev, com desenvolvimento de front e back criado como projeto do segundo modulo do bootcamp da Ironhack. Tivemos a ideia inicial de construir algo que fosse útil não apenas no quesito de aprendizado como também algo que pudéssemos manter em desenvolvimento, adicionando funcionalidades. O projeto baseia-se em 4 paginas onde teremos alguns dados sobre campeonatos de futebol brasileiro e sul-americano. Na aba campeonato brasileiro, teremos informações sobre pontuação corrente e seus respectivos clubes, repetindo-se nas abas da copa do Brasil, libertadores da américa e copa sul-americana. Qualquer dúvida ou sugestão, ficara disponível ao fim da página nossos contatos e o código-fonte do github.</p>        
            </Container>
            <Footer/>
        </>
    )
}

export default Home
