import { useEffect, useState } from "react";
import { Container } from "../../styles/FormFieldsContainer";
import axios from "axios";
import toast from "react-hot-toast";

export default function SubjectInput({ setSubject, disabled }) { 
    const [subjectsList, setSubjectsList] = useState();

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects`);

        request.then((response) => {
            setSubjectsList(response.data);
        });

        request.catch((error) => {
            toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, []);
    
    return(
        <Container>
            <span>matéria</span>
            <select disabled={disabled} required id="subjects" onChange={(e) => setSubject(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {subjectsList?.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
            </select>
        </Container>
    );
}