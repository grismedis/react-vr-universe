import React from 'react';
import {Text, View} from 'react-vr';


export default class Particle extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        const{style} = this.props;
        return (
            <View style={{flex:1, flexDirection:'row'}}>
                <Text
                    style={{
                        colour: 'red',
                        fontSize: 0.1,
                        fontWeight: '400',
                        transform: [{translate: [.01, 0, -4]}],
                    }}>
                    .
            </Text>

                <Text
                    style={{
                        fontSize: 0.05,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],

                        transform: [{translate: [.015, 0, -4]}],
                    }}>
                    .
            </Text>

                <Text
                    style={{
                        fontSize: 0.03,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],

                        transform: [{translate: [.0155, 0, -4]}],
                    }}>
                    .
            </Text>

                <Text
                    style={{
                        fontSize: 0.05,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],

                        transform: [{translate: [.0156, 0, -4]}],
                    }}>
                    .
            </Text>
                <Text
                    style={{
                        fontSize: 0.05,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],

                        transform: [{translate: [.0157, 0, -4]}],
                    }}>
                    .
            </Text>
            </View>
        );
    }
};
