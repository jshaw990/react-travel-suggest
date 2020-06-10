import React from 'react';
import './App.css';

import Button from './components/Button/button.component';
import Tip from './components/Tip/tip.component';

import tip from './tip.data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomIndex = Math.floor(Math.random() * tip.length);
    this.setState({ index: randomIndex });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <Tip index={ this.state.index } />
      </div> 
    )
  }
}

export default App;
