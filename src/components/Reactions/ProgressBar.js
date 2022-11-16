import { BsArrowRepeat, BsPlusCircleFill } from "react-icons/bs"
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import "./ProgressBar.css"

export const ProgressBar = ({ counter, restartProgressBar, updateProgressBar }) => {
    return (
        <div className="progressBar-container">
            <div className="progress-bar">
                <CircularProgressbar value={counter} />
            </div>
            <div className="control-buttons">
                <button onClick={() => restartProgressBar()} >
                    <BsArrowRepeat className="progress-buttons" />
                </button>
                <button onClick={() => updateProgressBar()} >
                    <BsPlusCircleFill className="progress-buttons" />
                </button>
            </div>
        </div>
    )
}