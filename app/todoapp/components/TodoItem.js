import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }


  render() {
    const {todo, completeTodo, deleteTodo} = this.props;

    let style = {
      itemStyle: {
        fontSize: '14px',
        
      },
      typeColor: {
          color: todo.type == 'exception' ? 'red' : (todo.type == 'confirm' ? 'orange' : 'blue'),
          marginLeft: '10px'
      },
      age: {
          color: 'green',
          marginLeft: '10px'
      }
    }

    let element;

    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle'
                 type='checkbox'
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)} style={style.itemStyle}>
            {todo.message}
            <span style={style.typeColor}>
              {todo.type}
            </span>
            <span style={style.age}>
              {todo.age} old
            </span>

          </label>
          <label>
          <a href='' onClick={() => chrome.tabs.create({url: 'https://shiphawk.com/connect/shipments/' + todo.shipmentId})}>
            SH{todo.shipmentId}
          </a>
          </label>
    
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }
}

export default TodoItem;