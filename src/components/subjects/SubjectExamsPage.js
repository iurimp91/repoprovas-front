import { useParams } from "react-router";

export default function SubjectExamsPage() {
    const { id } = useParams();
    console.log(id);
    
    return(
        <>
        </>
    );
}