import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #fd0215;

    h1 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 400;
        margin: 1.5rem;
    }

    p {
        color: #fff;
        font-size: 0.7rem;
        margin: 2rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    button {
        background: none;
        margin: 0.8rem;
        border: none;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }
`;