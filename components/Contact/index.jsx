import { Container } from "./styles"

export const Contact = () => {
    return (
        <Container>
            <img src="motor-2.jpg" alt="Nova Auto Peças" />
            <div className="content" id='contact'>
                <h1>Contato</h1>
                <div>
                    <a href="tel:+55-24-3350-0739" target="_blank">
                        <img src="telephone.svg" alt="Ligar" />Telefone: (24) 3350-0739
                    </a>
                    <a href="http://api.whatsapp.com/send?l=pt_BR&phone=5524998571370"target="_blank">
                        <img src="whatsapp.svg" alt="WhatsApp" />Whatsapp: (24) 98857-1370
                    </a>
                    <a href="https://goo.gl/maps/kH3YAGcCXi8PK97F6" target="_blank">
                        <img src="map.svg" alt="Localização" />Rua Capitão Benedito Lopes Bragança, 164, São Geraldo, Volta Redonda - RJ</a>
                </div>
            </div>
        </Container>
    )
}