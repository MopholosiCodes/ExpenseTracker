import React, { useState } from "react"
import { ClosedExpensePage } from "../Expense/ClosedExpesePage"
import { ExpenseForm } from "./ExpenseForm"

export const NewExpense = ({ onAddNewExpense }) => {
    const [page, setPage] = useState("closed")

    // handle page
    const openPage = () => setPage("open")
    const closePage = () => setPage("closed")

    return (
        <React.Fragment>
            {page === "open" && <ExpenseForm onSaveExpenseData={onAddNewExpense} handlePage={closePage} />}
            {page === "closed" && <ClosedExpensePage handlePage={openPage} />}
        </React.Fragment>
    )
}
