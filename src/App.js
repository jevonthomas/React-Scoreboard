import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { players } from './seed';
import Avatars from './components/avatar';
import FlatButton from 'material-ui/FlatButton';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { fullWhite } from 'material-ui/styles/colors';

const buttonStyle = {
  heigth: '100%'
};

class Scoreboard extends Component {
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
          width: '30%',
          margin: '0 auto'
        }}>
          <h1>Scoreboard</h1>
            {playerComponents}
          </div>

      </MuiThemeProvider>
    );
  }
}

class Player extends Component {
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
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <CardTitle style={{
          order: 2,
          marginRight: 'auto'
          }} title={this.props.name} subtitle={this.props.playerNumber} />
        <Avatars style={{
          order: 1
        }}></Avatars>
        <div style={{
          order: 3,
          display: 'flex',
          flexDirection: 'row-reverse'
          }}>
          <CardText style={{
            fontSize: '100%',
            alignSelf: 'center'
          }}>{this.props.points}</CardText>
          <div style={{
            display:'flex',
            flexDirection: 'column'
          }}>
            <FlatButton
              backgroundColor="#a4c639"
              hoverColor="#8AA62F"
              icon={<KeyboardArrowUp color={fullWhite} />}
              style={{height: '100%'}}
              onClick={this.handleOnScore}
            />
            <FlatButton
              backgroundColor="#a4c639"
              hoverColor="#8AA62F"
              icon={<KeyboardArrowDown color={fullWhite} />}
              style={{height: '100%'}}
              onClick={this.handleLosePoint}
            />
          </div>  
        </div>
        
      </div>
      </Card>
    );
  }
}

export default Scoreboard;
