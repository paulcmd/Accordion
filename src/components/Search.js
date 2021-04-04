import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    //console.log(results)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm
                    }
                }
            )

            setResults(data.query.search)
        }
        if (debouncedTerm) {
            search()
        }
    }, [debouncedTerm])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        )
    })

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
            <div className="ui celled list">{renderedResults}</div>
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

dangerouslySetInnerHTML is setting the HTML spans from wikipedia to jsx spans that can be
rendered

Each setTimeout has its own identifier that can be accessed if one needs to cancel it. ie clearTimeout(117)

debounced generally means setting up a timer that gets cancelled if a change is made too soon
*/
