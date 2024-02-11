import React from "react";
import { Text } from "react-native";
import Style from './estilo'

export default (props) => {
    return (
        <Text style={Style.txtM}>
            O valor de {props.max} é maior que o valor de {props.min}
        </Text>
    );
}
