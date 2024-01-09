import Syllable from "./Syllable";
import "./Choices.css";
import React from "react";

interface ChoicesProps {
    choices: string[],
    clickHandler: (index: number) => void
}

const Choices: React.FC<ChoicesProps> = ({choices, clickHandler}) => {
    console.log("Choices", choices);

    return (
        <div className="letter-choices">
            {choices.map( (letter, index) =>
                <Syllable
                    id={index}
                    key={index}
                    value={letter}
                    clickHandler={clickHandler}
                /> )
            }
        </div>
    );
}

export default Choices;