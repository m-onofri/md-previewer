import React from 'react';

class Editor extends React.Component {
    render() {
        const {markdown, changeText} = this.props;
        return (
            <div id="app-editor">
                <h1>Editor</h1>
                <textarea 
                    id="editor" 
                    value={markdown}
                    onChange={(e) =>changeText(e)}>
                </textarea>
            </div>
        );
    }
}

export default Editor;
  