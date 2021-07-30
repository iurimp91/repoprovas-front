import { Container } from "../../styles/FormFieldsContainer";

export default function TeacherInput({ setTeacher }) { 
    const teachers = [
        { id: 1, name: "Iuri Magnago"},
        { id: 2, name: "André Amaral"},
        { id: 3, name: "João Pedro Quirino"},
    ];
    
    return(
        <Container>
            <span>professor(a)</span>
            <select required id="teachers" onChange={(e) => setTeacher(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                ))}
            </select>
        </Container>
    );
}