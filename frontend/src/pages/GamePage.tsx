import Choices from "../Components/Choices";
import Answer from "../Components/Answer";
import "./GamePage.css";
import {DndContext} from "@dnd-kit/core";
import {useState} from "react";

const GamePage = () => {
    const [choices, setChoices] = useState<string[]>(["RA", "TI", "CA", "ȚĂ", "CA"]);
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>(["CA", "RA", "CA", "TI", "ȚĂ"]);
    const [successAudio] = useState(new Audio("/success.mp3"));


    const handleChoiceClick = (choiceIndex: number) => {
        const chosenSyllable = choices[choiceIndex];
        const newChoices = [...choices];
        newChoices.splice(choiceIndex, 1);
        setChoices(newChoices);
        answer.push(chosenSyllable)
        setAnswer(answer);

        checkAnswer();
    }

    const handleAnswerUndo = (syllableIndex: number) => {
        const undoneSyllable = answer[syllableIndex];
        const newAnswer = [...answer];
        newAnswer.splice(syllableIndex, 1);
        setAnswer(newAnswer);
        choices.push(undoneSyllable);
        setChoices(choices);
    }

    const checkAnswer = () => {
        if (answer.length !== correctAnswer.length) return;

        for (let i = 0; i < answer.length; ++i) {
            if (answer[i] !== correctAnswer[i]) {
                return;
            }
        }
        successAudio.play();
        alert("Bravo! Ai reușit!");
        // play a success sound
    }

    return (
        <DndContext>
            <div className="page">
                <div className="row">
                    <Answer answer={answer} correctAnswer={correctAnswer} clickHandler={handleAnswerUndo}/>
                    <img src="https://img.freepik.com/free-vector/cute-octopus-cartoon-white-background_157186-427.jpg?size=626&ext=jpg"/>
                </div>
                <Choices choices={choices} clickHandler={handleChoiceClick}/>
            </div>
        </DndContext>
    )
}

export default GamePage;