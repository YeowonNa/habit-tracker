import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); // submit 후 새로고침 방지
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); // 입력 후 초기화
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="habit을 입력해주세요"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
