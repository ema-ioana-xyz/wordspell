import "./Choices.css";
import SyllableSlot from "./SyllableSlot";
import React from "react";

interface AnswerProps {
    answer: string[],
    correctAnswer: string[],
    clickHandler: (index: number) => void
}

const Answer: React.FC<AnswerProps> = ({answer, correctAnswer, clickHandler}) => {
    console.log(answer)

    function isSyllableCorrect(index: number): boolean {
        return correctAnswer[index] === answer[index];
    }

    return (
        <div className="answer">
            {answer.map( (letter, index) =>
                <>
                    <SyllableSlot
                        id={index}
                        key={crypto.randomUUID()}
                        value={letter}
                        clickHandler={clickHandler}
                        isCorrect={isSyllableCorrect(index)
                    }
                    />
                    {index + 1 !== answer.length ? <span className="dash">-</span> : <></>}
                </>)
            }
        </div>
    );
}

export default Answer;