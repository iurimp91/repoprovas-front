import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Homepage() {
    return(
        <Container>
            <Logo>RepoProvas</Logo>
            <ButtonContainer>
                <Link to="/subjects">
                    por disciplina
                </Link>
                <Link to="/teachers">
                    por professor
                </Link>
            </ButtonContainer>
        </Container>
    );
}

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 30px);
    background-color: #f2f2f2;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-size: 100px;
    color: #2e2e2e;
`;

const ButtonContainer = styled.div`
    width: 480px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    a {
        width: 220px;
        height: 30px;
        background-color: #5e5e5e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        color: #ffffff;
    }
`;