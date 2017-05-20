import React from 'react';
import {
  Animated,
  AmbientLight,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Sphere,
} from 'react-vr';
import Particle from './components/Particle'

export default class olgis extends React.Component {
  render() {
    return (
      <View>
      <AmbientLight intensity={0.85} />
      <Particle/> 
      </View>
    );
  }
};

AppRegistry.registerComponent('olgis', () => olgis);
