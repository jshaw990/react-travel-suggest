import React from 'react';
import './button.styles.css';

class Button extends React.Component {
    render() {
        return (
            <button className='button' onClick={this.props.onClick}>
                Get a Travel Suggestion
            </button>
        )
    }
}

export default Button;