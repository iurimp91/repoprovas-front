import dayjs from "dayjs";
import styled from "styled-components";

export default function YearInput({ year, setYear }) {
    const currentYear = dayjs().year();
    
    return(
        <Container>
            <label>
                <span>ano</span>
                <input
                    required
                    type="number"
                    min="2000"
                    max={currentYear}
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                />
            </label>
        </Container>
    );
}

const Container = styled.div`   
    label {
        display: flex;
        align-items: center;
    }
    
    span {
        font-size: 20px;
        margin-right: 7px;
    }

    input {
        height: 30px;
        font-size: 18px;
    }
`;