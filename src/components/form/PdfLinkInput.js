import { Container } from "../../styles/FormFieldsContainer";

export default function PdfLinkInput({ link, setLink }) {
    return(
        <Container>
            <span>pdf link</span>
            <input
                required
                type="url"
                onChange={e => setLink(e.target.value)}
                value={link}
            />
        </Container>
    );
}