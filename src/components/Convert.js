import axios from 'axios'
import React, { useState, useEffect } from 'react'

const translateAPIKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text }) => {
const [translated, setTranslated] = useState('')

    useEffect(() => {

        const doTraslation = async () => {
            const { data } =  await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        target: language.value,
                        key: translateAPIKey
                    }
                }
            )

            setTranslated(data.data.translations[0].translatedText)
        }

        doTraslation()
        
    }, [language, text])
    return(
        <div>{translated}</div>
    )
}

export default Convert

/*
useEffect runs Convert again when language or text changes

10- empty object to say we dont want to send anything in the body

doTranslation function is introduced so we can do async await to axios.post
*/
