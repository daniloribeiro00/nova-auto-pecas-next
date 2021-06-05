import { Link, animateScroll as scroll } from 'react-scroll';

import { Container, Buttons } from './styles';

export const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <Container>
            <div className='content'>
                <a onClick={scrollToTop}>
                    <img src="logo.png" alt="Nova Auto Peças" />
                </a>
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