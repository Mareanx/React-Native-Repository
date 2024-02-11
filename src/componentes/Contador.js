import React, { useState } from "react";
import { Text, Button } from "react-native";
import Style from './estilo';

export default ({ inicial = 0, passo = 10 }) => {

    //let numero = props.inicial;

    const [numero, setNumero] = useState(inicial);

    const incre = () => setNumero(numero + passo);
    const decre = () => setNumero(numero - passo);





    return (
        <>


            <Button title="+"
                onPress={incre} />

            <Text style={Style.txtG}>{numero}</Text>

            <Button title="-"
                onPress={decre} />




        </>

    )

}
