import { Link, animateScroll as scroll } from 'react-scroll';

import { Container, Buttons } from './styles';

export const Header = () => {
    return (
        <Container>
            <div className='content'>
                <img src="logo.png" alt="Nova Auto Peças" />
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
            </div>
        </Container>
    )
}