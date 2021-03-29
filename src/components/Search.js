import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')

    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
        }

        search()
    }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search

/*
useEffect 2nd arg - 
[] - means run useeffect at initial render only
...nothing - means run at initial render and after every rerender
[data] - run at initial render and after every rerender IF data has changed since last render

alternatively in useEffect you can choose not to declare the function ie const search
ie async.... and call/invoke the function immediately after ie () vid 158 at 5min
*/
