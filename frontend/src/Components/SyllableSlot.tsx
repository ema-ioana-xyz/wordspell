import Syllable from "./Syllable";

interface SyllableSlotProps {
    value: string,
    id: number
}

const SyllableSlot = ({value, id}: SyllableSlotProps) => {
    if (!value)
        value = " ";

    return (
        <div className="syllable-slot-container">
            <span className="syllable">{value}</span>
        </div>
    );
}

export default SyllableSlot;