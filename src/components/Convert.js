import axios from 'axios'
import React, { useState, useEffect } from 'react'

const translateAPIKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setdebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedText(text)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        const doTraslation = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: translateAPIKey
                    }
                }
            )

            setTranslated(data.data.translations[0].translatedText)
        }
        
            doTraslation()
        
    }, [language, debouncedText])

    return <h1 className="ui header">{translated}</h1>
}

export default Convert

/*
useEffect runs Convert again when language or text changes

24- empty object to say we dont want to send anything in the body

doTranslation function is introduced so we can do async await to axios.post

10 - if text hasnt changed in 500ms, setDouncedText to text and run the search, else clearTimeout

*/
