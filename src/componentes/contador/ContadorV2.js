import React, { useState } from 'react';
import { Text } from 'react-native'
import Style from '../estilo';
import Display from './Display';
import Button from './Button';




export default props => {
    const [num, setNum] = useState(0);

    const incre = () => setNum(num + 1);
    const decre = () => setNum(num - 1);




    return (
        <>
            <Text style={Style.txtG}>
                Contador
            </Text>
            <Display num={num} />
            <Button incre={incre} decre={decre} />

        </>
    )
}
