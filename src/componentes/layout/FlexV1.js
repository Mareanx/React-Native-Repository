import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado';



export default props => {
    return (

        <View style={styles.FlexV1}>

            <Quadrado cor='#777' />
            <Quadrado cor='#900' />
            <Quadrado cor='#090' />
            <Quadrado cor='#098' />
            <Quadrado cor='#990' />
            <Quadrado cor='#806' />

        </View>
    )
}


const styles = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-between'
    }

})
