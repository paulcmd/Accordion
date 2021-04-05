import React from 'react'

const Dropdowm = ({ options, selected, onSelectedChange }) => {
    const renderedOptions = options.map((option) => {

        if(option.value === selected.value){
            return null
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select a color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
if(option.value === selected.value){
            return null
        }

        if current div is the selected div, do not show it
*/

export default Dropdowm
