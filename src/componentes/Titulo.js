import React from "react";
import { Text, View } from "react-native";
import Style from './estilo'

export default props => (
    <>
        <Text style={Style.txtG}>{props.principal}</Text>
        <Text style={Style.txtM}>{props.secundario}</Text>
    </>

)
