import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado';



export default props => {
    return (

        <View style={styles.FlexV2}>

            <Quadrado cor='#777' lado={10} />
            <Quadrado cor='#900' lado={20} />
            <Quadrado cor='#090' lado={30} />
            <Quadrado cor='#098' lado={40} />
            <Quadrado cor='#990' lado={50} />
            <Quadrado cor='#806' lado={60} />

        </View>
    )
}


const styles = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row-reverse',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 200,
        width: 100,
        backgroundColor: '#000',

    }
})
