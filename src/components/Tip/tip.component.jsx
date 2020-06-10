import React from 'react';
import './tip.styles.css';

import tips from '../../tip.data.js';

class Tip extends React.Component {
    displayTravelTip() {
        const { index } = this.props;
        return tips[index]
    }

    render() {
        const tip = this.displayTravelTip();

        return (
            <div>
                <h3>{tip.title}</h3>
                <p>{tip.city}, {tip.country}</p>
                <p className='description'>{tip.description}</p>
                <div className='more'>
                    <p>{tip.know}</p>
                </div>
            </div>
        )
    }
}

export default Tip;