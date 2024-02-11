import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';
import Style from '../estilo'


export default props => {

    const [num, setNum] = useState(0);
    const [txt, setTexto] = useState('');

    function exibirNumero(numero, texto) {
        setNum(numero);
        setTexto(texto);
    }



    return (
        <>
            <Text style={Style.txtG}>{txt}{num}</Text>
            <Filho
                min={1}
                max={100}
                funcao={exibirNumero}
            />
        </>

    )
}
