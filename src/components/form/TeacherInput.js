import { useEffect, useState } from "react";
import { Container } from "../../styles/FormFieldsContainer";
import axios from "axios";
import toast from "react-hot-toast";

export default function TeacherInput({ setTeacher, subject, disabled }) { 
    const [teachersList, setTeachersList] = useState();
    
    useEffect(() => {
        if (subject === undefined) return;
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/teachers/${subject}`);

        request.then((response) => {
            setTeachersList(response.data);
        });

        request.catch((error) => {
            if (error.response.status === 404) {
                toast.error("Não existe essa matéria na plataforma, tente novamente, por favor.");
            } else {
                toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
            }
        });
    }, [subject]);

    return(
        <Container>
            <span>professor(a)</span>
            <select disabled={disabled} required id="teachers" onChange={(e) => setTeacher(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {teachersList?.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                ))}
            </select>
        </Container>
    );
}