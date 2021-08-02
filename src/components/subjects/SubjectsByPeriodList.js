import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubjectsByPeriodList({ subjectsList, period }) {
    const filteredSubjectsList = subjectsList.filter(subject => subject.period === period);

    return(
        <Container>
        {filteredSubjectsList.map(subject =>         
            <Link key={subject.id} to={`/subjects/${subject.id}`}>
                <div className="subject"><span>{subject.name}</span></div>
                <div className="exams">provas {subject.exams.length}</div>
            </Link>
        )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        width: 400px;
        margin-bottom: 5px;
        color: #000000;
        display: flex;
        justify-content: space-between;
        

        :hover {
            text-decoration: underline;
        }

        .subject {
            width: 175px;
            display: flex;
            justify-content: flex-end;
        }

        .exams {
            width: 175px;
            display: flex;
            justify-content: flex-start;
        }
    }
`;