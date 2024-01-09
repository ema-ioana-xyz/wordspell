import React from 'react';
import "./LevelSelector.css";
interface LevelSelectorProps{
    levels: {id:number }[];
    currentLevel: number;
    onLevelSelect: (level: number) => void;
    wonLevels: number[];
}

const LevelSelector: React.FC<LevelSelectorProps> = ({levels, currentLevel, onLevelSelect, wonLevels}) => {
    return(
        <div className="level-selector">
            {levels.map((level, index) => (

                <button key={index}  
                        onClick={() => onLevelSelect(level.id-1)}
                        className={wonLevels.includes(level.id) ? 'completed' : ''}
                        >{level.id}</button>
            ))}
        </div>
    )
}

export default LevelSelector;