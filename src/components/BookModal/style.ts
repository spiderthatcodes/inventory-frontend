import styled from 'styled-components';

export const ModalContainer = styled.div`
    margin: auto;
    background-color: #e6e6e9;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
    position: fixed;
    top: 5%;
`;

export const BookCard = styled.div`
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    "a a a"
    "b c c"
    "b c c";

    #title {
        grid-area: a;
    }

    img {
        grid-area: b;
    }

    #details {
        grid-area: c;
    }
`;
