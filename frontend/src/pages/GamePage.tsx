import Choices from "../Components/Choices";
import Answer from "../Components/Answer";
import "./GamePage.css";
import {DndContext} from "@dnd-kit/core";
import {useEffect, useState} from "react";

const GamePage = () => {
    const [choices, setChoices] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<string[]>([]);
    const [imgUrl, setImgUrl] = useState<string>("");
    const [imgAlt, setImgAlt] = useState<string>("");
    const [successAudio] = useState(new Audio("/success.mp3"));
    const [wordAudio, setWordAudio] = useState<HTMLAudioElement>();
    const [syllableAudio, setSyllableAudio] = useState<{[key: string]: HTMLAudioElement}>();
    const apiRoot = "https://localhost:7091/api";

    // AI generated shuffler (uses Fisher-Yates / Knuth algorithm)
    function shuffle(array: string[]) { // Modifies array in place
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    useEffect(() => {
        const handler = async() => {
            // get all word data
            let wordData: Word[];
            try {
                const response = await fetch(apiRoot + "/cuvinte");
                if (!response.ok) throw new Error(response.statusText);

                wordData = await response.json();
            } catch (err) {
                console.error("Fetch error", err);
                return;
            }

            // randomly select a word
            const word = wordData[Math.floor(Math.random() * wordData.length)];
            const syllables = word.cuvant.split("-");
            setCorrectAnswer(syllables);
            setChoices(shuffle([...syllables]));
            setImgUrl(word.urlImagine);
            const wordValue = word.cuvant.replaceAll("-", "");
            setImgAlt("O imagine cu un " + wordValue);

            setWordAudio(new Audio("/sounds/" + wordValue + ".m4a"));

            const syllableAudio: {[key: string]: HTMLAudioElement} = {};
            for (const syllable of syllables) {
                syllableAudio[syllable] = new Audio("/sounds/" + syllable + ".m4a");
            }
            setSyllableAudio(syllableAudio);
        }

        handler().catch(console.error);
    }, []);

    const handleChoiceClick = (choiceIndex: number) => {
        const chosenSyllable = choices[choiceIndex];
        if (syllableAudio) {
            syllableAudio[chosenSyllable].play();
        }
        const newChoices = [...choices];
        newChoices.splice(choiceIndex, 1);
        setChoices(newChoices);
        answer.push(chosenSyllable)
        setAnswer(answer);

        checkAnswer();
    }

    const handleAnswerUndo = (syllableIndex: number) => {
        const undoneSyllable = answer[syllableIndex];

        if (syllableAudio) {
            syllableAudio[undoneSyllable].play();
        }

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
        successAudio.volume = 0.1;
        successAudio.play();
        alert("Bravo! Ai reușit!");
    }

    const sayWord = () => {
        console.log("Say word");
        wordAudio.play();
    }

    return (
        <DndContext>
            <div className="page">
                <div className="col">
                    <Answer answer={answer} correctAnswer={correctAnswer} clickHandler={handleAnswerUndo}/>
                    <Choices choices={choices} clickHandler={handleChoiceClick}/>
                </div>
                <div className="col">
                    <img src={imgUrl} alt={imgAlt} onClick={() => sayWord()}/>
                    <div onClick={() => sayWord()}>
                        <span className="speaker-icon" >📢</span>
                    </div>
                </div>
            </div>
        </DndContext>
    )
}

export default GamePage;