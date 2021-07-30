import { Container } from "../../styles/FormFieldsContainer";

export default function CategoryInput({ setCategory }) { 
    const categories = [
        { id: 1, name: "P1"},
        { id: 2, name: "P2"},
        { id: 3, name: "P3"},
    ];
    
    return(
        <Container>
            <span>categoria</span>
            <select required id="categories" onChange={(e) => setCategory(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </Container>
    );
}