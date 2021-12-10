import Habit from './habit';
import HabitAddForm from './habitAddForm';
import React from 'react';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onAdd,
  onDelete,
  onReset,
}) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habit-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
