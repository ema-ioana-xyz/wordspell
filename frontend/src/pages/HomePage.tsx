import LevelSelector from "../Components/LevelSelector";

import "./HomePage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [levels, setLevels] = useState<{ id: number }[]>([]);
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [completedLevels, setCompletedLevels] = useState<number[]>([]); 
    const navigation = useNavigate();
    const goToGamePage = (id: number) => {
        navigation("/game/" + id);
    }
    useEffect(() => {
        const handler = async () => {
            let levels: { id: number }[];
            try {
                const response = await fetch("https://localhost:7091/api/cuvinte");
                if (!response.ok) throw new Error(response.statusText);

                levels = await response.json();
            } catch (err) {
                console.error("Fetch error", err);
                return;
            }

            setLevels(levels);
            setCurrentLevel(levels[0].id);
        }

        handler().catch(console.error);
    }, []);

    return (
        <div className="home-page">
            <header><h1>Word Game</h1></header>
            <main>
                <LevelSelector levels={levels} currentLevel={currentLevel}  onLevelSelect={goToGamePage} wonLevels={completedLevels}/>
            </main>
        </div>
    );
}

export default HomePage;