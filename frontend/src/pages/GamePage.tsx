import Choices from "../Components/Choices";
import Answer from "../Components/Answer";
import "./GamePage.css";
import {DndContext} from "@dnd-kit/core";

const GamePage = () => {
    return (
        <DndContext>
            <div className="page">
                <div className="row">
                    <Answer/>
                    <img src="https://img.freepik.com/free-vector/cute-octopus-cartoon-white-background_157186-427.jpg?size=626&ext=jpg"/>
                </div>
                <Choices/>
            </div>
        </DndContext>
    )
}

export default GamePage;