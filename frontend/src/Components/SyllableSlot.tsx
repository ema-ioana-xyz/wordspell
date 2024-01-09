import Syllable from "./Syllable";
import "./Syllable.css";

interface SyllableSlotProps {
    value: string,
    id: number,
    isCorrect: boolean,
    clickHandler: (index: number) => void
}

const SyllableSlot = ({value, id, isCorrect, clickHandler}: SyllableSlotProps) => {
    if (!value)
        value = " ";

    let divClass = isCorrect? "syllable-slot-container correct" : "syllable-slot-container wrong";

    return (
        <div className={divClass} onClick={() => clickHandler(id)}>
            <span className="syllable">{value}</span>
        </div>
    );
}

export default SyllableSlot;