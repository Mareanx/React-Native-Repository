import React, { useState } from 'react';
import { Text } from 'react-native'
import Style from './estilo';
import If from './If';




export default props => {

    const usuario = props.usuario || {};

    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text style={Style.txtM}>
                    {usuario.nome} {usuario.email}
                </Text>
            </If>
        </>
    )
}
