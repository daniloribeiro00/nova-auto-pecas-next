import { Link, animateScroll as scroll } from 'react-scroll';

import { Container, Buttons } from './styles';

export const Footer = () => {
    return (
        <Container>
            <h1>Nova Auto Peças</h1>
            <Buttons>
                <Link to='info' smooth={true} offset={-15}>
                    <button>Início</button>
                </Link>
                <Link to='about' smooth={true} offset={-15}>
                    <button>Empresa</button>
                </Link>
                <Link to='contact' smooth={true} offset={-15}>
                    <button>Contato</button>
                </Link>
            </Buttons>
            <p>Desenvolvido por <a href="mailto:danilo.ribeiro00d@gmail.com" target='_blank'>Danilo Ribeiro</a></p>
        </Container>
    )
}