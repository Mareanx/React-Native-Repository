import React from "react";
import { Text, Button } from "react-native";
import Style from './estilo'

export default props => {

    function executar() {
        console.warn("Executandooooooooooooooo 01")
    }

    return (
        <>
            <Button
                title="executar 01"
                onPress={executar}

            />

            <Button title="executar 02"
                onPress={function () {
                    console.warn('Excutando 02')
                }} />

            <Button title="executar 03"
                onPress={() => {
                    console.warn('Excutando 03')
                }} />
        </>
    )


}
