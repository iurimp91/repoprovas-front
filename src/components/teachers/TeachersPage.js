import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TeachersPage() {
    const [teachersList, setTeachersList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        const request = axios.get("http://localhost:4000/teachers");

        request.then((response) => {
            const filteredTeachers = response.data.filter((teacher) => {
                return teacher.name.toLowerCase().includes(searchTerm);
            });
            setTeachersList(filteredTeachers);
        });

        request.catch((error) => {
            alert("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, [searchTerm])

    return(
        <Container>
            <Title>professores</Title>
            <Input type="text" placeholder="pesquisar" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            <TeachersContainer>
                {teachersList.length === 0
                    ? <h1>sem resultados</h1> 
                    : teachersList?.map(teacher => (
                    <Link key={teacher.id} to={`/teachers/${teacher.id}`} >
                        <span>{teacher.name}</span>
                        <span>provas {teacher.exams.length}</span>
                    </Link>
                ))}
            </TeachersContainer>
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
    margin-bottom: 20px;
    color: #2e2e2e;
`;

const Input = styled.input`
    width: 300px;
    height: 40px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
`;

const TeachersContainer = styled.ul`
    width: 300px;

    h1 {
        font-size: 20px;
    }

    a {
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        background-color: #5e5e5e;
        padding: 0 10px;
        color: #ffffff;

        :hover {
            background-color: #2e2e2e;
        }
    }
`;