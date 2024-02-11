import React, { useState } from 'react';
import { Text, FlatList } from 'react-native'
import Style from '../estilo';

import produtos from './produtos';





export default props => {

    const renderProd = ({ item: p }) => {
        return <Text>{p.id} {p.nome} {p.preco}</Text>
    }


    return (
        <>
            <Text style={Style.txtM}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={renderProd}
            />
        </>
    )
}
