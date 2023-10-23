import React from 'react'

const Wrapper = () => {
    return (
        <article>
            <header className="mb-9 space-y-1">
                <p className="heading-xs">Introduction</p>
                <h1 className="heading-1">Getting started</h1>
            </header>
            <div className='mb-9 space-y-3'>
                <p className='paragraph'>
                Developers often encounter challenges when working with CSS grid layouts and Flexbox, especially when they are not used correctly. Common problems include:
                </p>
                <p className='paragraph'><strong>Layout Complexity:</strong> Without a proper framework, creating complex layouts can become a time-consuming and error-prone task, resulting in inconsistent designs.</p>
                <p className='paragraph'><strong>Responsive Design Difficulty:</strong> Ensuring that your layouts are responsive across various screen sizes can be challenging, leading to a poor user experience on different devices.</p>
                <p className='paragraph'><strong>Inefficient Code:</strong> Writing and maintaining extensive CSS code to manage layouts can become inefficient, difficult to scale, and prone to bugs.</p>
            </div>
        </article>
    )
}

export default Wrapper