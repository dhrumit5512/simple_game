import React from 'react';
import PropTypes from 'prop-types';

import { Text, StyleSheet } from "react-native";

import React from "react";

class RandomNumber extends React.Component {
    static PropTypes = {
        number: PropTypes.number.isRequired,
    };
    render() {
        return (
            <Text style={styles.random}>{this.props.number}</Text>
        );
    }
}
