import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import SubjectsByPeriodList from "./SubjectsByPeriodList";

export default function SubjectsPage() {
    const [subjectsList, setSubjectsList] = useState([]);
    const [periodsList, setPeriodsList] = useState([]);
    
    useEffect(() => {
        const request = axios.get("http://localhost:4000/subjects");

        request.then((response) => {
            setSubjectsList(response.data);
            const mapPeriods = response.data.map(subject => subject.period);
            const removeDuplicatePeriods = [...new Set(mapPeriods)];
            setPeriodsList(removeDuplicatePeriods);
        });

        request.catch((error) => {
            alert("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, []);

    return(
        <Container>
            <Title>disciplinas</Title>
            <SubjectsContainer>
                {periodsList.map(period =>
                    <div key={period}>
                        <h1 key={period.id} >{period}{period !== "Eletiva" ? "º período" : ""}</h1>
                        <SubjectsByPeriodList key={period.id} subjectsList={subjectsList} period={period} />
                    </div>
                )}
            </SubjectsContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 30px);
    background-color: #f2f2f2;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 30px;
    margin-top: 60px;
    color: #2e2e2e;
`;

const SubjectsContainer = styled.ul`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        text-align: center;
    }

    h1 {
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;