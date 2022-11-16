import "./Heart.css"
import { BsHeartFill } from "react-icons/bs"

export const Heart = ({ counter, updateHeart, restartHeart }) => {
    return (
        <div className="heart-container">
            <h1>{counter}</h1>
            <button onClick={() => updateHeart()}>
                <BsHeartFill className="heart" />
            </button>
            <button onClick={() => restartHeart()}>
                <h1 className="restart-button">X</h1>
            </button>
        </div>
    )
}