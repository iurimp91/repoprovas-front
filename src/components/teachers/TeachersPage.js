import { GeneralContainer } from "../../styles/GeneralContainer";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

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

    console.log(searchTerm);

    return(
        <GeneralContainer>
            <Title>professores</Title>
            <Input type="text" placeholder="pesquisar" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
            <TeachersContainer>
                {teachersList?.map(teacher => (
                    <li>
                        <span>{teacher.name}</span>
                        <span>provas {teacher.exams.length}</span>
                    </li>
                ))}
            </TeachersContainer>
        </GeneralContainer>
    );
}

const Title = styled.h1`

`;

const Input = styled.input`

`;

const TeachersContainer = styled.ul`

`;