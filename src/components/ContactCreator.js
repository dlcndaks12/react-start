import React from 'react';

class ContactCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: ''
    };
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
    return (
      <div>
        <p>
          <input type="text"
                 name="name"
                 placeholder="name"
                 value={this.state.name}
                 //onChange={this.handleChange.bind(this)} />
                 onChange={(e) => this.handleChange(e)} />
          <input type="text"
                 name="phone"
                 placeholder="phone"
                 value={this.state.phone}
                 //onChange={this.handleChange.bind(this)} />
                 onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleClick()}>Insert</button>
        </p>
      </div>
    );
  }
}

export default ContactCreator;