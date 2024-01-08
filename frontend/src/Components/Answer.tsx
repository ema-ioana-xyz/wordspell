import "./Choices.css";
import SyllableSlot from "./SyllableSlot";

const Answer = () => {
    const letters = ["CA", "  ", "  ", "TI", "ȚĂ"];

    return (
        <div className="answer">
            {letters.map( (letter, index) =>
                <>
                    <SyllableSlot id={index} key={index} value={letter}/>
                    {index + 1 !== letters.length ? <span className="dash">-</span> : <></>}
                </>)
            }
        </div>
    );
}

export default Answer;