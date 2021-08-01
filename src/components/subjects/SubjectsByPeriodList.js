import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubjectsByPeriodList({ subjectsList, period }) {
    console.log(period);
    console.log(subjectsList);

    return(
        <Container>
        {subjectsList.map(subject => {
            if (subject.period === period) {
                return(
                    <Link to={`/subject/${subject.id}`}>{subject.name}</Link>
                );
            }
        })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
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