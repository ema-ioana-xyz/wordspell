import React from "react";
import "./Syllable.css";

interface  SyllableProps {
    value: string,
    id: number,
    clickHandler: (syllableIndex: number) => void
}

const Syllable = ({value, id, clickHandler}: SyllableProps) =>  {
    return (
        <div className="syllable-container" onClick={() => clickHandler(id)}>
            <span className="syllable">{value} </span>
        </div>
    );
}

export default Syllable;