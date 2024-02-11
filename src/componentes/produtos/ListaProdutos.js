import React, { useState } from 'react';
import { Text } from 'react-native'
import Style from '../estilo';
import produtos from './produtos';




export default props => {

    function obterLista() {
        return (produtos.map(p => {
            return <Text key={p.id} style={Style.txtG}>
                {p.id} ) {p.nome} - {p.preco}
            </Text>
        }))
    }

    return (
        <>
            <Text style={Style.txtG}>
                Lista de Produtos
            </Text>
            {obterLista()}

        </>
    )
}
