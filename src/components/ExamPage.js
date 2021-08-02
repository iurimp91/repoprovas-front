import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router";
import setCategoryName from "../utils/setCategoryName";
import toast from "react-hot-toast";

export default function ExamPage() {
    const { id } = useParams();
    const [exam, setExam] = useState();
    const categoryName = setCategoryName(exam?.category.name);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/exam/${id}`);

        request.then((response) => {
            setExam(response.data);
        });

        request.catch((error) => {
            toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, [id]);

    return(
        <Container>
            <h1>{categoryName} - {exam?.year}/{exam?.semester} - {exam?.subject.name} - {exam?.teacher.name}</h1>
            <object data={exam?.link} width="1000" height="1000" type="application/pdf">
                <p>Seu navegador não tem um plugin pra PDF</p>
            </object>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        font-size: 20px;
        margin: 20px 0;
        color: #2e2e2e;
        text-align: center;
    }
`;