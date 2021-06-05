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

        p {
            font-size: 1rem;
            line-height: 1.4rem;
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 700px) {
        margin: 4rem 0;

        display: flex;
        align-items: center;
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