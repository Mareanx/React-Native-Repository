import React, { useState } from 'react';
import { Text, View } from 'react-native'
import Style from './estilo';


export default ({ num = 0 }) => {

    return (
        <View>
            <Text style={Style.txtG}>O resultado é: </Text>{

                num % 2 == 0
                    ? <Text style={Style.txtG}> é par</Text>
                    : <Text style={Style.txtG}> é impar</Text>
            }
        </View>
    )



}


