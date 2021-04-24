import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log(`New language: ${language.label} or text: ${text}`)
    }, [language, text])
    return <div></div>
}

export default Convert


/*
useEffect runs Convert again when language or text changes
*/ 