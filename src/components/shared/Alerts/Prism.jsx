import React from 'react'
import '../../../assets/styles/prism-custom.css'
import "../../../assets/styles//prism.css";
import 'prismjs'

const Prism = ({children,language='html'}) => {
    const  highlightHTML = (value) =>{
        const code = value;
        const highlightedCode = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="html-value">$1</span>')
            .replace(/&lt;[\/]?([a-zA-Z0-9_-]+)([^&]*)(\/)?&gt;/g, '<p>&lt;<span class="html-tag">$1</span><span class="html-attribute">$2</span>$3&gt;</p>')
            .replace(/&lt;!--[\s\S]*?--&gt;/g, '<span class="html-comment">$&</span>')
            .replace(/&lt;![\s\S]*?--&gt;/g, '<span class="html-doctype">$&</span>');

        return highlightedCode;
    }
    return (
        <>
            <code>
            <pre className={`language-${language}`} >{children}</pre>
            </code>
            {/* <div className='html' dangerouslySetInnerHTML={{__html:highlightHTML(children)}}></div> */}
        </>
    )
}

export default Prism