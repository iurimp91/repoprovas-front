import { useEffect, useState } from "react";
import { Container } from "../../styles/FormFieldsContainer";
import axios from "axios";

export default function CategoryInput({ setCategory }) { 
    const [categoriesList, setCategoriesList] = useState();

    useEffect(() => {
        const request = axios.get("http://localhost:4000/categories");

        request.then((response) => {
            setCategoriesList(response.data);
        });

        request.catch((error) => {
            alert("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, []);
    
    return(
        <Container>
            <span>categoria</span>
            <select required id="categories" onChange={(e) => setCategory(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {categoriesList?.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </Container>
    );
}