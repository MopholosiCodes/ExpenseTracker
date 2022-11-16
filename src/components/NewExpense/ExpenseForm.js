import "./ExpenseForm.css"
import { useState } from "react"

export const ExpenseForm = ({ onSaveExpenseData, handlePage }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        price: ""
    })

    const submitHandler = e => {
        e.preventDefault()

        let expenseData = {
            id: Math.floor(Math.random() * 100),
            title: formData.title,
            date: new Date(formData.date),
            price: formData.price
        }

        handlePage()
        onSaveExpenseData(expenseData)
        setFormData({ title: "", date: "", price: "" })
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="input-fields">
                <div className="input_field">
                    <label>Item</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>
                <div className="input_field">
                    <label>Price</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                    />
                </div>
                <div className="input_field">
                    <label>Date</label>
                    <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>
            </div>

            <div className="buttons">
                <div className="submit-button">
                    <button type="submit">Add Expense</button>
                </div>
                <div className="submit-button">
                    <button onClick={() => handlePage()}>Close</button>
                </div>
            </div>
        </form>
    )
}