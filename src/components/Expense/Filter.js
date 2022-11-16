import React from "react"

export const Filter = ({ handleFilter }) => {
    return (
        <React.Fragment>
            <div className="filtered-items">
                <select onChange={e => handleFilter(e.target.value)}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </React.Fragment>
    )
}