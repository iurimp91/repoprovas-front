import styled from "styled-components";

export default function SemesterInput({ setSemester }) {
    return(
        <>
            <div className="legal">
                <input required type="radio" id="first-semester" name="semester" onChange={(e) => setSemester(e.target.value)} value={1} />
                <label htmlFor="first-semester"><span>1º semestre</span></label>
            </div>
            <div>
                <input required type="radio" id="second-semester" name="semester" onChange={(e) => setSemester(e.target.value)} value={2} />
                <label className="oi" htmlFor="second-semester"><span>2º semestre</span></label>
            </div>
        </>
    );
}

const Container = styled.div`
    height: inherit;
    display: flex;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; 

        input {
            margin-right: 5px;
        }
    }
`;