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
                <p>{tip.description}</p>
            </div>
        )
    }
}

export default Tip;