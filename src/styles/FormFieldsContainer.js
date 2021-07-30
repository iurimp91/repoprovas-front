import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cfcfcf;
    margin-bottom: 20px;
    padding: 0 20px;
    
    span {
        font-size: 20px;
        margin-right: 7px;
    }

    select {
        width: 231px;
        height: 30px;
        font-size: 18px;
    }

    input {
        height: 30px;
        font-size: 18px;
    }
`;