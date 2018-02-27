import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { fullWhite } from 'material-ui/styles/colors';

const style = {
  heigth: '100%',
  width: 'auto'
};

const Buttons = () => (
  <div style={{
    display:'flex',
    flexDirection: 'column'
  }}>
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
  </div>
);

export default Buttons;