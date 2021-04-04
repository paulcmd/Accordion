import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'A Shade of Blue',
            value: 'blue'
        }
    ]

    return (
        <div className="container">
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown options={options}/>
        </div>
    )
}

export default App
