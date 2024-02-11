import React, { useState } from 'react';
import { Text, Platform } from 'react-native'
import Style from './estilo';






export default _ => {
    if (Platform.OS === 'android') {
        return <Text style={Style.txtG}>android!!!</Text>
    }
    else if (Platform.OS === 'ios') {
        return <Text>ios!!!</Text>
    }
    else {
        return <Text>ave maria</Text>
    }



}

