const Preview = ({ markdown }) => {
    return ( <div id="preview" className="output" dangerouslySetInnerHTML={markdown}></div> );
}
 
export default Preview;