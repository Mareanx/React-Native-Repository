import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import Style from './estilo';




export default props => {

    const [nome, setNome] = useState('Testing');

    return (

        <View>
            <Text>{nome}</Text>
            <TextInput
                style={Style.txtG}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)} />

        </View>
    )
}
