import Prism from "../components/shared/Alerts/Prism"
import Info from "../components/shared/Alerts/Info"
const Installation = () => {
  return (
    
    <article className='language-html '>
      <header className="mb-9 space-y-1">
          <p className="heading-xs">Introduction</p>
          <h1 className="heading-1">Installation</h1>
          <p className='paragraph'>here's a quick start guide for your Flexy system</p>
      </header>
      <div className='bloc'>
        <h3 >Option 1: CDN (Content Delivery Network)</h3>
        <h5 >Include Flexy:</h5>
        <p >Add the following line to your HTML file's <span className='sky-marker'>{`<head>`}</span> section to include Flexy via CDN:</p>
        <Prism>
        {`<link rel="stylesheet" href="https://cdn.example.com/Flexy.css">`}
        </Prism>
        {/* <h4 className='heading-5'>Include Flexy:</h4>
        <p className='paragraph'>Create a container for your grid layout in your HTML structure. For example:</p>
        <Prism>
        {`<div class="wrapper"><!-- Your grid items go here --></div>`}
        </Prism> */}
      </div>
      <div className="bloc">
        <h3>Option 2: Using npm (Node Package Manager)</h3>
        <p>Open your terminal and navigate to your project directory. Run the following command to install Flexy via npm:</p>
        <Prism>{`npm install Flexy-css`}</Prism>
        <h5>Import Flexy:</h5>
        <p>In your project's CSS file, import Flexy:</p>
        <Prism language='css'>{`@import 'Flexy-css';`}</Prism>
      </div>
      <div className="bloc">
        <h3>Option 3: Download</h3>
        <p>Visit <span className="sky-marker">Flexy's</span> website and download the CSS file.</p>
        <h5>Include Flexy:</h5>
        <p>Add the downloaded CSS file to your project directory and include it in your HTML file:</p>
        <Prism>{`<link rel="stylesheet" href="path-to-Flexy.css">`}</Prism>
      </div>
      <hr className="my-3" />
      <div className="bloc">
        <h3>HTML Structure:</h3>
        <p>Create a container for your grid layout in your HTML structure. For example:</p>
        <Info title="Information">
          You can use <span className="sky-marker">.warapper</span> class or use or custom class <span className="sky-marker">container</span>
        </Info>
        <Prism>{`<div class="warapper ">
        <div class="grid ">
          ...
          </div>
        </div>`}</Prism>
      </div>
    </article>
  )
}

export default Installation