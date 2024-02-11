import React from "react";
import { Text, UseState } from "react-native";
import Style from './estilo'


export default ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + min;


    return (
        <Text style={Style.txtG}> o valor aleatorio é {aleatorio} </Text>)


}
