import { Container } from "../../styles/FormFieldsContainer";

export default function SubjectInput({ setSubject }) { 
    const subjects = [
        { id: 1, name: "Cálculo 1"},
        { id: 2, name: "Cálculo 2"},
        { id: 3, name: "Mecânica Vetorial"},
    ];
    
    return(
        <Container>
            <span>matéria</span>
            <select required id="subjects" onChange={(e) => setSubject(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
            </select>
        </Container>
    );
}