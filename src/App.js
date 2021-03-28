import React from 'react'
import Accordion from './components/Accordion'

const App = () => {

    const items = [
        {
            title: 'What is React',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React',
            content: 'Reat is a favorite JS Library among engineers'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }

    ]
    return (
        <div className="container">
            <Accordion items={items}/>
        </div>
    );
}

export default App;