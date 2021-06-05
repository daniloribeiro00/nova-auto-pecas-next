import styled from 'styled-components';

export const Container = styled.div`
    img {
        width: 100%;
    }

    .content {
        margin: 2rem 2.5rem 2.5rem 2.5rem;

        h1 {
            font-size: 1.6rem;
            max-width: 16rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            a {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    margin-right: 0.8rem;
                    height: 1.5rem;
                    width: 1.5rem;
                }
            }
        }
    }
    
    @media (min-width: 700px) {
        margin: 4rem 0;

        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        
        img {
            width: 50%;
        }

        .content {
            max-width: 900px;
            margin: 0 4rem;

            p {
                margin: 2rem 0 0 0;
            }

        }

    }
`;