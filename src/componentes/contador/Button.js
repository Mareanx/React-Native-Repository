import React, { useState } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native'
import Style from '../estilo';


export default props => {



    return (
        <View style={style.Botao}>

            <Button
                title='+'
                onPress={props.incre}


            />

            <Button
                title='-'
                onPress={props.decre}
            />


        </View>
    )
}

const style = StyleSheet.create({
    Botao: {
        flexDirection: "row",
        alignItems: "center",



    }




})

