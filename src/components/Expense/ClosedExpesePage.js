import React from "react"

export const ClosedExpensePage = ({ handlePage }) => {
    return (
        <React.Fragment>
            <div className="submit-button">
                <button onClick={() => handlePage()}>Add Expense</button>
            </div>
        </React.Fragment>
    )
}