import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeacherExamsByCategory from "./TeacherExamsByCategory";
import toast from "react-hot-toast";
import Loading from "../Loading";

export default function TeacherExamsPage() {
    const { id } = useParams();
    const [teacherExams, setTeacherExams] = useState([]);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/teacher/${id}`);

        request.then((response) => {
            setTeacherExams(response.data);
        });

        request.catch((error) => {
            toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, [id]);

    return(
        <Container>
            <Title>{teacherExams?.teacherName}</Title>
            <ExamsContainer>
                {   teacherExams.length === 0
                    ? <div className="loading" ><Loading /></div>
                    : (
                        teacherExams.examsByCategory?.length === 0
                        ? <h1>Não há provas cadastradas para esse(a) professor(a)</h1>
                        : teacherExams.examsByCategory?.map(categoryExams =>
                            <TeacherExamsByCategory
                                key={categoryExams.id}
                                categoryExams={categoryExams}
                            />    
                        )
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

    .loading {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
`;