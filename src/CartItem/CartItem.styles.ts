import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'arial', helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    paddding-bottom: 10px;

    div { 
        flex: 1;
    }

    .information
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
`;