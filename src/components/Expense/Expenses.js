import { ExpenseItem } from "./ExpenseItem"
import { useState } from "react"
import { Filter } from "./Filter"

export const Expenses = ({ expenses }) => {
    const [filteredList, setFilteredList] = useState([])

    // filter by year
    const handleFilter = year => {
        if (year.toString() === "") setFilteredList(expenses)
        else {
            let filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year)
            setFilteredList(filteredExpenses)
        }
    }

    return (
        <div>
            <Filter handleFilter={handleFilter} />
            {filteredList.length === 0
                ? <h2>No expenses available</h2>
                : filteredList.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                    />
                )}
        </div>
    )
}