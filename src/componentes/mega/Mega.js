import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import Estilo from '../estilo'



export default class Mega extends Component {


    state = {
        qNum: this.props.qNum,
        numeros: []

    }

    alterarNumero = (qtdNum) => {
        this.setState({ qNum: +qtdNum })

    }

    /*função recursiva*/

    gerarNumeroNaoContido = nums => {

        const novo = parseInt(Math.random() * 80) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo


    }

    gerarNumero = () => {
        const numeros = Array(this.state.qNum)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    render() {

        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena  {this.state.qNum}
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderWidth: 1, }}
                    placeholder='qtd de numeros'
                    value={`${this.state.qNum}`}
                    onChangeText={qtdNum => this.alterarNumero(qtdNum)}
                />

                <Button
                    title='gerador'
                    onPress={this.gerarNumero}


                />
                <Text style={Estilo.txtG}>{this.state.numeros.join(',')}</Text>

            </>


        )



    }



}
