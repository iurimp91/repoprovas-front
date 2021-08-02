import styled from "styled-components";
import { Link } from "react-router-dom";
import setCategoryName from "../../utils/setCategoryName";

export default function SubjectExamsByCategory({ categoryExams }) {
    const categoryName = setCategoryName(categoryExams.name);

    return(
        <Container>
            <h1>{categoryName}</h1>
            {categoryExams.exams.map(exam => 
                <Link key={exam.id} to={`/exam/${exam.id}`} target="_blank" rel="noopener noreferrer" >
                    <span>{exam.year} - {exam.semester}º semestre</span>
                    <span>{exam.teacher.name}</span>
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