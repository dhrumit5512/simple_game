import React from 'react';
import PropTypes from 'prop-types';

import { Text,TouchableOpacity, StyleSheet } from "react-native";

import React from "react";

class RandomNumber extends React.Component {
    static PropTypes = {
        number: PropTypes.number.isRequired,
    };
    handlePress = () => {
        //console.log(this.props.number);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
            <Text style={styles.random}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({

    random: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
});

export default RandomNumber;