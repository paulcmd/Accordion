import React from 'react'

const Dropdowm = ({ options }) => {
    const renderedList = options.map((option) => {
        return (
            <div key={option.value} className="item">
                {option.label}
            </div>
        )
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select a color</label>
            </div>
        </div>
    )
}

export default Dropdowm
