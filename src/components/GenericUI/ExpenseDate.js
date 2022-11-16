import React from "react";

export const ExpenseDate = ({ date }) => {
    const year = date.getFullYear();
    return (
        <React.Fragment>
            <p>{year}</p>
        </React.Fragment>
    )
}