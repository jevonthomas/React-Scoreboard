import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { players } from './seed';
import Avatars from './components/avatar';
import Buttons from './components/Buttons';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  gridList: {
    width: 800
  },
};

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };

    this.handleIncrementPlayerScore = this.handleIncrementPlayerScore.bind(this);
    this.handleDecrementPlayerScore = this.handleDecrementPlayerScore.bind(this);
  }

  componentDidMount() {
    this.setState({ players: players });
  }

  handleIncrementPlayerScore = (playerId) => {
    const nextPlayers = this.state.players.map((player) => {
      if (player.id === playerId) {
        return Object.assign({}, player, {
          points: player.points + 1,
        });
      } else {
        return player;
      }
    });
    this.setState({
      players: nextPlayers,
    });
  }

  handleDecrementPlayerScore = (playerId) => {
    const nextPlayers = this.state.players.map((player) => {
      if (player.id === playerId) {
        return Object.assign({}, player, {
          points: player.points - 1,
        });
      } else {
        return player;
      }
    });
    this.setState({
      players: nextPlayers,
    });
  }

  render() {
    const players = this.state.players.sort((a, b) => (
      b.points - a.points
    ));
    const playerComponents = players.map((player) => (
      <Player
        key={'player-' + player.id}
        id={player.id}
        name={player.name}
        playerNumber={player.playerNumber}
        points={player.points}
        onScore={this.handleIncrementPlayerScore}
        onLosePoint={this.handleDecrementPlayerScore}
      />
    ));
    return (
      <MuiThemeProvider>
        <div style={{
          width: '50%',
          margin: '0 auto'
        }}>
          <h1>Scoreboard</h1>
          
            {playerComponents}
          </div>

      </MuiThemeProvider>
    );
  }
}

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnScore = this.handleOnScore.bind(this);
    this.handleLosePoint = this.handleLosePoint.bind(this);
  }

  handleOnScore = () => (
    this.props.onScore(this.props.id)
  );
  handleLosePoint = () => (
    this.props.onLosePoint(this.props.id)
  );

  render() {
    return (
      
      <Card>
        <div style={{
        display:'flex',
        flexDirection: 'row'
      }}>
        <CardTitle title={this.props.name} subtitle={this.props.playerNumber} />
        <CardText>Score: {this.props.points}</CardText>
        <Avatars></Avatars>
        <Buttons></Buttons>
        
      </div>
      </Card>
    );
  }
}

export default Scoreboard;
