import styled from 'styled-components';

export const Container = styled.header`
    background-color: #fd0215;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            height: 10rem;
        }

    }

    @media (min-width: 700px) {
        .content {
            max-width: 900px;
            margin: 0 auto;
            flex-direction: row;
            justify-content: space-between;

            img {
                height: 15rem;
            }
        }

    }
`;

export const Buttons = styled.div`
    background-color: #eee;
    height: 3rem;
    width: 90%;
    max-width: 30rem;
    margin: 0 2rem 1rem 2rem;
    border-radius: 0.8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        border: none;
        color: #212121;
        font-size: 1rem;
        cursor: pointer;
    }

    @media (min-width: 700px) {
        margin: 0 2rem;
    }
`;