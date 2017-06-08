import React from 'react';
import ContactInfo from "./ContactInfo";
import ContactCreator from './ContactCreator';
import ContactRemover from './ContactRemover';
import ContactEditor from "./ContactEditor";

class Contracts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0004'}
      ],
      selectedKey: -1,
      selected: {
        name: '',
        phone: ''
      }
    }
  }

  _insertContact(name, phone) {
    let newState = this.state.contactData;
    newState.push({
      name: name,
      phone: phone
    });
    this.setState({
      contactData: newState
    });
  }

  _onSelect(key) {
    if(key === this.state.selectedKey) {
      console.log('Key select cancelled');
      this.setState({
        selectedKey: -1,
        selected: {
          name: '',
          phone: ''
        }
      });
      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    });
    console.log(key + ' is selected');
  }

  _isSelected(key) {
    if(this.state.selectedKey === key) {
      return true;
    }else{
      return false;
    }
  }

  _removeContact() {
    if(this.state.selectedKey === -1) {
      console.log('contact not selected');
      return;
    }

    let newState = this.state.contactData;
    newState.splice(this.state.selectedKey, 1);
    this.setState({
      contactData: newState
    });
    this.state.selectedKey = -1;
  }

  _editContact(name, phone) {
    let newState = this.state.contactData;
    newState[this.state.selectedKey] = {
      name: name,
      phone: phone
    };
    this.setState({
      contactData: newState,
      selected: {
        name: name,
        phone: phone
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contactData.map((contact, i) => {
            return (
              <ContactInfo name={contact.name}
                          phone={contact.phone}
                     contactKey={i}
                            key={i}
                     isSelected={this._isSelected.bind(this)(i)}
                       onSelect={this._onSelect.bind(this)} />
            );
          })}
        </ul>

        <ContactRemover onRemove={this._removeContact.bind(this)} />
        <ContactCreator onInsert={this._insertContact.bind(this)} />
        <ContactEditor onEdit={this._editContact.bind(this)}
                   isSelected={this.state.selectedKey !== -1}
                      contact={this.state.selected} />
      </div>
    );
  }
}

export default Contracts;