import { useEffect, useState } from "react";
import { Container } from "../../styles/FormFieldsContainer";
import axios from "axios";
import toast from "react-hot-toast";

export default function CategoryInput({ setCategory, disabled }) { 
    const [categoriesList, setCategoriesList] = useState();

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`);

        request.then((response) => {
            setCategoriesList(response.data);
        });

        request.catch((error) => {
            toast.error("Algo deu errado com sua requisição, atualize a página, por favor.");
        });
    }, []);
    
    return(
        <Container>
            <span>categoria</span>
            <select disabled={disabled} required id="categories" onChange={(e) => setCategory(e.target.value)} defaultValue="" >
                <option disabled ></option>
                {categoriesList?.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </Container>
    );
}