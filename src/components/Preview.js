import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true
  });
  
const renderer = new marked.Renderer();
renderer.link = ((href, title, text) => `<a target="_blank" href="${href}">${text}` + '</a>');

class Preview extends React.Component {
    render() {
        const {markdown} = this.props;
        return (
            <div id="app-preview">
                <h1>Preview</h1>
                <div 
                    id="preview"
                    dangerouslySetInnerHTML= {{__html: marked(markdown, { renderer: renderer })}}>
                </div>
            </div>
        );
    }
}

export default Preview;
  