import styled from "styled-components";
import { Link } from "react-router-dom";
import { GeneralContainer } from "../styles/GeneralContainer";

export default function Homepage() {
    return(
        <GeneralContainer>
            <Logo>RepoProvas</Logo>
            <ButtonContainer>
                <Link to="/subjects">
                    por disciplina
                </Link>
                <Link to="/teachers">
                    por professor
                </Link>
            </ButtonContainer>
        </GeneralContainer>
    );
}

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

        :hover {
            background-color: #2e2e2e;
        }
    }
`;