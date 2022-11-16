import "./Like.css"
import { BsHandThumbsUpFill } from "react-icons/bs"
import { motion } from "framer-motion"

export const Like = ({ counter, updateLikeCounter }) => {

    const properties = {
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }

    return (
        <>
            <motion.div animate={properties} >
                <div className="like-container">
                    <button onClick={() => updateLikeCounter()}>
                        <BsHandThumbsUpFill className="like" />
                    </button>
                </div>
            </motion.div>
        </>
    )
}