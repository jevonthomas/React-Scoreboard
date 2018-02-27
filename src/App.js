import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import {fullWhite} from 'material-ui/styles/colors';

function generateScore() {
  return Math.floor((Math.random() * 50) + 15);
}

const players = [
  {
    id: 1,
    name: 'Leonardo',
    playerNumber: 1,
    points: generateScore(),
  },
  {
    id: 2,
    name: 'Donatello',
    playerNumber: 2,
    points: generateScore(),
  },
  {
    id: 3,
    name: 'Raphael',
    playerNumber: 3,
    points: generateScore(),
  },
  {
    id: 4,
    name: 'Michelangelo',
    playerNumber: 4,
    points: generateScore(),
  },
];


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  gridList: {
    width: 800
  },
};

const style = {
  margin: 12,
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
        <CardTitle title={this.props.name} subtitle={this.props.playerNumber} />
        <CardText>Score: {this.props.points}</CardText>
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<KeyboardArrowUp color={fullWhite} />}
          style={style}
          onClick={this.handleOnScore}
        />
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<KeyboardArrowDown color={fullWhite} />}
          style={style}
          onClick={this.handleLosePoint}
        />
      </Card>
    );
  }
}

export default Scoreboard;
