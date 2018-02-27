import React from 'react';
import Avatar from 'material-ui/Avatar';
import Image from '../images/avatar_male_1.png';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const Avatars = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={Image} />
      }
    >
    </ListItem>
  </List>
);

export default Avatars;