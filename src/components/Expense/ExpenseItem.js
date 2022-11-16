import "./ExpenseItem.css"
import { ExpenseDate } from "../GenericUI/ExpenseDate"

export const ExpenseItem = ({ date, title, price }) => {
    return (
        <div className="container">
            <div>
                <ExpenseDate date={date} />
            </div>
            <p>{title}</p>
            <div className="price-container">
                <p>R{price}</p>
            </div>
        </div>
    )
}