import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  render() {
    return (
      <header className='header-selection'>
          <select>
              <option>All Tasks</option>
              <option>Exception</option>
              <option>Confirmation</option>
              <option>Dispatch</option>
          </select>
      </header>
    );
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
}

export default Header;