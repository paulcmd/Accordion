import React, {useState} from 'react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitlleClick = (index) =>{
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <div onClick={() => onTitlleClick(index)} className='title active'>
                    <i className='dropdown icon'></i>
                    <h2>
                        {item.title}
                    </h2>
                </div>
                <div className='content active'>
                    <p>
                        {item.content}
                    </p>
                </div>
            </React.Fragment>


        )
    })
    return <div className='ui styled accordion'>
        {renderedItems}
        {renderedItems[activeIndex]}
        </div>
}

export default Accordion;

/* 
Using React.Fragment to remove the extra border at the top of the div

When helper function (onTitleClick) is defined outside renderedItems, we passed in index
and use ()=> on onClick on div. If inside, we just call the function without passing index
 and without ()=>
*/