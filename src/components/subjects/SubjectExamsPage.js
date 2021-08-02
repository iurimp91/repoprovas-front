import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubjectExamsByCategory from "./SubjectExamsByCategory";
import toast from "react-hot-toast";

export default function SubjectExamsPage() {
    const { id } = useParams();
    const [subjectExams, setSubjectExams] = useState([]);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/subject/${id}`);

        request.then((response) => {
            setSubjectExams(response.data);
        });

        request.catch((error) => {
            toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, [id]);

    return(
        <Container>
            <Title>{subjectExams.subjectName}</Title>
            <ExamsContainer>
                {subjectExams.examsByCategory?.length === 0
                    ? <h1>Não há provas cadastradas para essa disciplina</h1>
                    : subjectExams.examsByCategory?.map(categoryExams =>
                        <SubjectExamsByCategory key={categoryExams.id} categoryExams={categoryExams} />    
                    )                    
                }
            </ExamsContainer>
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
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 30px;
    margin-top: 60px;
    color: #2e2e2e;
`;

const ExamsContainer = styled.ul`
    width: 300px;

    h1 {
        margin-top: 20px;
        font-size: 20px;
        text-align: center;
    }
`;