import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ExamsByCategory({ categoryExams }) {
    let categoryName;
    
    if (categoryExams.name === "P1") {
        categoryName = "Prova 1";
    } else if (categoryExams.name === "P2") {
        categoryName = "Prova 2";
    } else if (categoryExams.name === "P3") {
        categoryName = "Prova 3";
    } else if (categoryExams.name === "2ch") {
        categoryName = "Prova Segunda Chamada";
    } else {
        categoryName = "Outras";
    }

    return(
        <Container>
            <h1>{categoryName}</h1>
            {categoryExams.exams.map(exam => 
                <Link className="exam" to={`/exam/${exam.id}`} >
                    <span>{exam.year} - {exam.semester}º semestre</span>
                    <span>{exam.subject.name}</span>
                </Link>
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    a {
        width: 300px;
        cursor: pointer;
        margin-bottom: 5px;
        color: #000000;

        :hover {
            text-decoration: underline;
        }

        span:first-child {
            margin-right: 30px;
        }
    }
`;