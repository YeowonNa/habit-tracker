import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
            <li>
                <span className="habit-name">Reading</span>
                <span className="habit-count">0</span>
            </li>
        );
    }
}

export default Habit;