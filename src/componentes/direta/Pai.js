import React, { useState } from 'react';
import { Text } from 'react-native'
import Style from '../estilo';
import Filho from './Filho';



export default props => {
    let x = 10;
    let y = 15;


    return (
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 1} b={y + 1} />
        </>
    )
}
