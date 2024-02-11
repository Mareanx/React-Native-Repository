import React, { useState } from 'react';
import Filho from './Membro';
import { Text } from 'react-native';
import Style from '../estilo'



export default props => {
    return (
        <>
            <Text style={Style.txtM}>
                Membros da Familia:
            </Text>

            {props.children}
        </>
    )
}
