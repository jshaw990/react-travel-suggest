import React from 'react';
import './button.styles.css';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Get a Random Tip
            </button>
        )
    }
}

export default Button;