import React from 'react';

class RefComponent extends React.Component {
  handleClick() {
    this.inputRef.value = '';
    this.inputRef.focus();
  }

  render() {
    return(
      <div>
        <input type="text" ref={(ref) => this.inputRef = ref} />
        <button onClick={(e) => this.handleClick(e)}>Click Me</button>
      </div>
    );
  }
}

export default RefComponent;