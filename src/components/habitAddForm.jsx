import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); // submit 후 새로고침 방지
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = ''; // 입력 후 초기화
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit을 입력해주세요"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
