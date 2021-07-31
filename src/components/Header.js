import styled from "styled-components";
import  { AiFillFileAdd } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Container>
            <Link to="/">
                <FaHome className="icon" />
                <span>início</span>
            </Link>
            <Link to="/exam-form">
                <AiFillFileAdd className="icon" />
                <span>enviar prova</span>
            </Link>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 30px;
    background-color: #5e5e5e;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    box-shadow: 0px 6px 9px 0px rgba(50, 50, 50, 0.56);

    a {
        width: 250px;
        height: 100%;
        background-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        color: #ffffff;

        .icon {
            font-size: 20px;
            margin-right: 7px;
            color: #ffffff;
        }
    }
`;