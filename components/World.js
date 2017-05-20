import React from 'react';
import {View} from 'react-vr';
import Asteroid from './Asteroid';

export default class World extends React.Component {
  render() {
    return (
      <View>

        <Asteroid
          style={{
            transform: [{scale: 0.5}, {translate: [0, 0, -30]}],
          }}
        />

        <Asteroid
          style={{
            transform: [{scale: 0.9}, {translate: [-30, 12, -20]}],
          }}
        />

        <Asteroid
          style={{
            transform: [{scale: 1}, {translate: [50, -3, -20]}],
          }}
        />

      </View>
    );
  }
}
