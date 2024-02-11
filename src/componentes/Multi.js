/*varios componentes*/

import React from 'react';
import { Text, View } from 'react-native'
import Style from './estilo'

export default function Comp() {
    return <Text style={Style.txtG}>Comp oficial</Text>
}

export function Comp1() {
    return <Text style={Style.txtM}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Style.txtP}>Comp #02</Text>
}

