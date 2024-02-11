import React, { useState } from 'react';
import { Button, Text, } from 'react-native'




export default props => {

    function gerarNum(min, max) {
        const delta = max - min + 1;
        return parseInt(Math.random() * delta) + min;
    }



    return (
        <>
            <Button
                title='Executar'
                onPress={function () {
                    const n = gerarNum(props.min, props.max);
                    props.funcao(n, 'o valor é: ');
                }}
            />
        </>
    )
}
