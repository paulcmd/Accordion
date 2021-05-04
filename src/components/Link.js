import React from 'react'

const Link = ({ href, className, children }) => {

    const onClick = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    )
}

export default Link


/*
Link component is an a tag that receives a href, classname and children(text). onClick prevents
default action so that page is not refreshed.

-window.history.pushState({}, '', href) displays correct href on address bar
*/