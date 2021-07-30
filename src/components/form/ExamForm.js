import styled from "styled-components";
import { useState } from "react";
import YearInput from "./YearInput";
import SemesterInput from "./SemesterInput";
import CategoryInput from "./CategoryInput";
import SubjectInput from "./SubjectInput";
import TeacherInput from "./TeacherInput";
import PdfLinkInput from "./PdfLinkInput";

export default function ExamForm() {
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState();
    const [category, setCategory] = useState();
    const [subject, setSubject] = useState();
    const [teacher, setTeacher] = useState();
    const [link, setLink] = useState("");

    function insertExam(e) {
        e.preventDefault();
    }

    console.log(year);
    console.log(semester);
    console.log(category);
    console.log(subject);
    console.log(teacher);
    console.log(link);

    return(
        <Container>
            <form onSubmit={insertExam}>
                <div className="year-semester">
                    <YearInput year={year} setYear={setYear} />
                    <SemesterInput setSemester={setSemester} />
                </div>
                <CategoryInput setCategory={setCategory} />
                <SubjectInput setSubject={setSubject} />
                <TeacherInput setTeacher={setTeacher} />
                <PdfLinkInput link={link} setLink={setLink} /> 
                <button type="submit">enviar</button>
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