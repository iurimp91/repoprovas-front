import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import YearInput from "./YearInput";
import SemesterInput from "./SemesterInput";
import CategoryInput from "./CategoryInput";
import SubjectInput from "./SubjectInput";
import TeacherInput from "./TeacherInput";
import PdfLinkInput from "./PdfLinkInput";
import axios from "axios";

export default function ExamForm() {
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState();
    const [category, setCategory] = useState();
    const [subject, setSubject] = useState();
    const [teacher, setTeacher] = useState();
    const [link, setLink] = useState("");
    const history = useHistory();
    const [disabled, setDisabled] = useState(false);

    function insertExam(e) {
        e.preventDefault();
        setDisabled(true);
        const body = {
            year,
            semester,
            category: category,
            subject: subject,
            teacher: teacher,
            link
        }

        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/exam`, body);

        request.then((response) => {
            alert("Prova inserida!");
            setDisabled(false);
            history.push("/");
        });

        request.catch((error) => {
            setDisabled(false);
            if (error.response.status === 409) {
                alert("Prova já cadastrada na plataforma.");
            } else {
                alert("Algo deu errado com sua requisição, atualize a página, por favor.");
            }
        });
    }

    return(
        <Container>
            <form onSubmit={insertExam}>
                <div className="year-semester">
                    <YearInput year={year} setYear={setYear} disabled={disabled} />
                    <SemesterInput setSemester={setSemester} disabled={disabled} />
                </div>
                <CategoryInput setCategory={setCategory} disabled={disabled} />
                <SubjectInput setSubject={setSubject} disabled={disabled} />
                <TeacherInput subject={subject} setTeacher={setTeacher} disabled={disabled} />
                <PdfLinkInput link={link} setLink={setLink} disabled={disabled} /> 
                <button disabled={disabled} type="submit">enviar</button>
            </form>
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
    justify-content: center;

    form {
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .year-semester {
            width: inherit;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #cfcfcf;
            margin-bottom: 20px;
            padding: 0 20px;
        }
    }

    button {
        width: 220px;
        height: 40px;
        background-color: #5e5e5e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        border: none;

        :hover {
            background-color: #2e2e2e;
        }
    }
`;