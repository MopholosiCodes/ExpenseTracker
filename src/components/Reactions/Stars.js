import { useState } from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import "./Stars.css"

export const Stars = ({ starCount, updateStars }) => {
    return (
        <div className="star-container">
            <div className="">
                <button onClick={() => updateStars(0)} className="star-button">
                    <BsStar className="star-inactive" />
                </button>
            </div>
            <div className="">
                <button onClick={() => updateStars(1)} className="star-button">
                    {
                        starCount >= 1
                            ? <BsStarFill className="star-active" />
                            : <BsStar className="star-inactive" />
                    }
                </button>
                <button onClick={() => updateStars(2)} className="star-button">
                    {
                        starCount >= 2
                            ? <BsStarFill className="star-active" />
                            : <BsStar className="star-inactive" />
                    }
                </button>
                <button onClick={() => updateStars(3)} className="star-button">
                    {
                        starCount >= 3
                            ? <BsStarFill className="star-active" />
                            : <BsStar className="star-inactive" />
                    }
                </button>
            </div>
        </div>
    )
}