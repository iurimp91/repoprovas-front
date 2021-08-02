export default function SemesterInput({ setSemester, disabled }) {
    return(
        <>
            <div className="legal">
                <input disabled={disabled} required type="radio" id="first-semester" name="semester" onChange={(e) => setSemester(e.target.value)} value={1} />
                <label htmlFor="first-semester"><span>1º semestre</span></label>
            </div>
            <div>
                <input disabled={disabled} required type="radio" id="second-semester" name="semester" onChange={(e) => setSemester(e.target.value)} value={2} />
                <label className="oi" htmlFor="second-semester"><span>2º semestre</span></label>
            </div>
        </>
    );
}