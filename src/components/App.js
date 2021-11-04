import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
      },
      {
        name: "James",
        id: 4,
        score: 0,
      },
    ],
  };

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  // handleAddPlayer = (name) =>{
  //   this.setState({
  //     players:[
  //       ...this.state.players,
  //       {
  //       name,
  //       score: 0,
  //       id: this.prevPlayerId +=1,
  //     }
  //     ]
  //   })
  // }
  
  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
