import Syllable from "./Syllable";
import "./Choices.css";

const Choices = () => {
    const letters = ["RA", "CA"];

    return (
        <div className="letter-choices">
            {letters.map( (letter, index) =>
                <>
                    <Syllable id={index} key={index} value={letter}/>
                </>
                )
            }
        </div>
    );
}

export default Choices;