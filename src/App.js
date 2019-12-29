import React from 'react';
import './App.css';
import Preview from './components/Preview.js';
import Editor from './components/Editor.js';

const placeholder = 
`# Markdown Previewer

## Sub-heading...
### Another sub-heading...
  
Some code between 2 backticks: \`<div></div>\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
**bold text**
_italic text_
**_bold and italic text_**
~~Another text style~~.

A [links](https://www.freecodecamp.com)
> Block Quotes!

Tables:

Header 1 | Header 2| Header 3
------------ | ------------- | ------------- 
content 1 | content 2 | content 3
content 4 | content 5 | content 6

- Bulleted lists:
  - list item 1
     - list item 2
        - list item 3
- list item 4
* list item 5

1. A numbered list
1. A numbered list item
1. A numbered list item 1

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  state = {
    markdown: placeholder
  }

  changeText = (e) => {
    const text = e.target.value;
    this.setState({
      markdown: text
    });
  }
  
  render() {
    return (
      <div id="main-content">
        <Editor 
          markdown={this.state.markdown}
          changeText={this.changeText}/>
        <Preview 
          markdown={this.state.markdown}/>
      </div>
    );
  }
}


export default App;
