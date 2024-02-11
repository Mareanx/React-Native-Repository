import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo';




export default props => {


    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },

    DisplayText: {
        color: '#FFFF'
    }







})
