import { BsArrowRepeat, BsPlusCircleFill } from "react-icons/bs"
import "./Counter.css"

export const Counter = ({ counter, updateCounter, restartCounter }) => {
    return (
        <div className="counter-container">
            <div className="number-container">
                <h1 className="number">{counter}</h1>
                <div className="button-container">
                    <button onClick={() => restartCounter()} className="restart-button">
                        <BsArrowRepeat className="button" />
                    </button>
                    <button onClick={() => updateCounter()} className="restart-button">
                        <BsPlusCircleFill className="button" />
                    </button>
                </div>
            </div>

            <div className="stats-container">
                <ul>
                    <li>min: 1</li>
                    <li>max: 10</li>
                    <li>step: 1</li>
                    <li>initial:</li>

                    <li>current: {counter}</li>

                    <li>
                        position:
                        {counter === 1 && " Start."}
                        {counter === 10 && " End."}
                        {counter > 1 & counter < 10 && " Between."}
                    </li>

                    <li>motion: {counter === 1 ? " Entrance" : " Default"}</li>
                    <li>event: {counter === 1 ? 0 : 10}</li>
                    <li>progress: 0.{counter}{counter}{counter}</li>

                    <li>Try incrementing</li>
                    <li>Try resetting</li>
                </ul>
            </div>
        </div>
    )
}