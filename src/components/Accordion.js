import React, {useState} from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) =>{
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

    const activateClass = activeIndex === index ? 'active' : ''

        return (
            <React.Fragment key={index}>
                <div 
                onClick={() => onTitleClick(index)} 
                className={`title ${activateClass}`}>
                    <i className='dropdown icon'></i>
                    <h2>
                        {item.title}
                    </h2>
                </div>

                <div className={`content ${activateClass}`}>
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>


        )
    })
    return <div className='ui styled accordion'>
        {renderedItems}
        </div>
}

export default Accordion;

/* 
const [firstElement, secondElement] = someArray
square brackets are just a way of getting the first 2 elements of the array, they do
not create an array. ie array destructuring

Using React.Fragment to remove the extra border at the top of the div

When helper function (onTitleClick) is defined outside renderedItems, we passed in index
and use ()=> on onClick on div. If inside, we just call the function without passing index
 and without ()=>
*/