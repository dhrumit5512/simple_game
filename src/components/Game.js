import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from "react-native";

import RandomNumber from './RandomNumber';

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
    };
    state ={
        selectedNumber: [],
        remainingSeconds: this.props.initialSecond,
    };
    randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(
        () => 1 + Math.floor(10 * Math.random()),
    );
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0);

        componentDidmount() {
            setInterval(() => {
                this.setState((prevState) => {
                    return { remainingSeconds: prevState.remainingSeconds - 1 };
                });
            }, 1000);
        }

        isNumberselected = (numberIndex) => {
            return this.state.selectedNumbers.indexOF(numberIndex) >= 0;
        };
        selectNumber = (numberIndex) => {
            this.setState((prevState) => ({
                selectedNumbers: [...prevState.selectedNumbers, numberIndex],
            }));
        };

        gameStatus = () => {
            const sumSelected = this.state.selectedIDs.reduce((acc, curr) => {
                return acc +nthis.randomNumbers[cirr];
            },0);
            if (sumSelected < this.target) {
                return 'PLAYING';
            }
            if (sumSelected === this.target) {
                return 'WON';
            }
            if (sumSelected > this.target) {
                return 'LOST';
            }
        };

 render() {
        const gameStatus =  this.gameStatus();
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
                    {this.target}
                    </Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, index) => (
                        <RandomNumber 
                        key={index} 
                        id={index} 
                        number={randomNumber} 
                        isDisabled ={this.isNumberselected(index) || gameStatus !== 'PLAYING'} 
                        onPress={this.selectNumber}
                        />
                    ))}
                </View>
                <Text>{this.state.remainingSeconds}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },

    target: {
        fontSize: 50,
        backgroundColour: '#aaa',
        margin: 50,
        textAlign: 'center',
    },

    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    random: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
});

export default Game;