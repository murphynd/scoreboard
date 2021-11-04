import React from 'react';
import Counter from './Counter';
import { PureComponent } from 'react';


//should component update behind the scenes in purecomponent only 
//rerenders if it detects changes in state or props of component
class Player extends PureComponent{ 
  render() {
    const {name, removePlayer, score, index, changeScore, id } = this.props
    //how you destructure props in classes

    console.log(name + " rendered")
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
        score = {score}
        changeScore = {changeScore}
        index = {index} />
      </div>
    );
  }
}

export default Player;