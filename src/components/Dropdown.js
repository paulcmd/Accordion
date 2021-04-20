import React, { useState, useEffect, useRef } from 'react'

const Dropdowm = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        document.body.addEventListener(
            'click',
            (e) => {
                setOpen(false)
            },
            {
                capture: true
            }
        )
    }, [])

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
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

    console.log(ref.current)
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> Select a color</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? 'visible active' : ''
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
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

        if current div is the selected div, do not show it. its already showing at the top

useRef - directly references a DOM element eg. div or li item
        */

export default Dropdowm
