import { Container } from "./styles"

export const About = () => {
    return (
        <Container>
            <img src="motor-1.jpg" alt="Nova Auto Peças" />
            <div className="content" id='about'>
                <h1>Empresa</h1>
                <p>Fundada em Dezembro de 2015, a Nova Auto Peças surgiu com o objetivo de proporcionar as melhores peças para seu veículo com as melhores condições da região.</p>        
                <p>Com uma equipe alegre e qualificada, estamos sempre prontos para atendê-lo da melhor maneira possível.</p>        
                <p>Venha conhecer!</p>  
            </div>       
        </Container>
    )
}