import { Container } from "./styles"

export const Info = () => {
    return (
        <Container id='info'>
            <div className="content">
                <div>
                    <h1>Sua Nova Opção Em Peças!</h1>
                    <p>Uma nova loja multimarcas de auto peças em Volta Redonda.</p> 
                </div>   
                <div className='list'>
                    <li>Motor</li>
                    <li>Freio</li>
                    <li>Suspensão</li>
                </div>
            </div>
        </Container>
    )
}