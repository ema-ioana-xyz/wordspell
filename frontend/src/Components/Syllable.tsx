import React from "react";
import "./Letter.css";

interface  LetterProps {
    value: string,
    id: number
}

const Syllable = ({value, id}: LetterProps) =>  {
    return (
        <div className="syllable-container">
            <span className="syllable">{value}</span>
        </div>
    );
}

export default Syllable;