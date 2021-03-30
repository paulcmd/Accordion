import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    console.log(results)

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
                        srsearch: term
                    }
                }
            )
            setResults(data.query.search)
        }

        search()
    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
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
*/
