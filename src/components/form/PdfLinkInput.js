import { Container } from "../../styles/FormFieldsContainer";

export default function PdfLinkInput({ link, setLink, disabled }) {
    return(
        <Container>
            <span>pdf link</span>
            <input
                disabled={disabled}
                required
                type="url"
                onChange={e => setLink(e.target.value)}
                value={link}
            />
        </Container>
    );
}