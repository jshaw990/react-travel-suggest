import React from 'react';

import tips from '../../tip.data.js';

class Background extends React.Component {
    changeBackground() {
        const { index } = this.props;
        return tips[index]
    }
    
    render() {
        const tip = this.changeBackground();

        return (
            <img 
                src={tip.image} 
                alt={tip.title} 
                className='background' 
            />
        )
    }
}

export default Background;