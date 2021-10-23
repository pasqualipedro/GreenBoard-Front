import React from 'react';
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer';
import styled from 'styled-components'

const Container = styled.div`
  {props.className};
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 20px;
  padding-bottom:20px;
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

const Home = () => {
    return (
        <>
            <NavbarPublic/>
            <div style = {{backgroundColor: '#C1FAE3'}}>
                <h1 className = 'pt-3 text-center'>GreenBook</h1>
                <Container>
                    <div>
                        <p> GreenBook é um aplicação web dev, com desenvolvimento de front e back criado como projeto do terceiro modulo do bootcamp da Ironhack. 
                        Tivemos a ideia inicial de construir algo que fosse útil não apenas no quesito de aprendizado como também 
                        algo que pudéssemos manter em desenvolvimento, adicionando funcionalidades.</p> 
                        <p>A escolha do tema, foi realizada devido a importância que a organização financeira apresenta, principalmente no cenário de incertezas econômicas e profissionais que estamos inseridos. 
                        Além disso, o tema baseia-se no espaço vago deixado na educação básica, relacionado com a falta de educação financeira para os alunos.</p>
                        <p> O projeto baseia-se em uma aplicação voltada para a organização financeira do usuário, 
                        de modo que ele(a) pode registrar suas transações financeiras de modo a conseguir realizar um acompanhamento mais detalhado de seus gastos e ganhos. 
                        Após a realização do cadastro do usuário, ele é direcionado diretamente para uma tela de cateogrias em que é pemitido imputar dados das categorias que fazem parte de sua vida financeira tais como Despesas da Casa, Despesas com Transporte, Salário, Bonificações.
                        A partir disso, é gerado um dashboard, com as categorias elencadas e seus respectivos orçamentos. O usuário tem a possibilidade de incrementar transações, em cada uma das categorias, de acordo com o decorrer do tempo e assim possuir a informação sobre sua vida financeira, de forma clara e centralizada.</p> 
                        <p> Qualquer dúvida ou sugestão, ficara disponível ao fim da página nossos contatos e o código-fonte do github.</p> 
                    </div>
                </Container>
                <Footer/>
            </div>
        </>
    )
}

export default Home
