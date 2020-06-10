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
            <div className='tip'>
                <h2>{tip.title}</h2>
                <p>{tip.city}, {tip.country}</p>
                <p className='description'>{tip.description}</p>
                <div className='more'>
                    <h3>Know Before You Go</h3>
                    <p>{tip.know}</p>
                </div>
            </div>
        )
    }
}

export default Tip;