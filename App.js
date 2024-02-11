import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Primeiro from './src/componentes/PrimeiroComp'
import Com, { Comp1, Comp2 } from './src/componentes/Multi'
import Comp from './src/componentes/Multi';
import MinMax from './src/componentes/MinMax';
import Aleatorio from './src/componentes/Aleatorio';
import Titulo from './src/componentes/Titulo';
import Botao from './src/componentes/Botao';
import Contador from './src/componentes/Contador';
import Filho from './src/componentes/direta/Filho';
import ContadorV2 from './src/componentes/contador/ContadorV2';
import Diferenciar from './src/componentes/Diferenciar';
import ImparPar from './src/componentes/ImparPar';
import Familiaa from './src/componentes/relacao/Familiaa';
import Membro from './src/componentes/relacao/Membro';
import UsuarioLogado from './src/componentes/UsuarioLogado';
import ListaProdutos from './src/componentes/produtos/ListaProdutos';
import ListaProdutoV2 from './src/componentes/produtos/ListaProdutoV2';
import DigiteSeuNome from './src/componentes/DigiteSeuNome';
import FlexV1 from './src/componentes/layout/FlexV1';

export default () => (
  <SafeAreaView style={styles.container}>

    <FlexV1 />
    {/*<Aleatorio min={1} max={100} />
    <DigiteSeuNome />
    <ListaProdutoV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: 'Maria', email: 'maria100%gata@gmail.com' }} />
    <UsuarioLogado usuario={{ nome: 'Maria' }} />
    <UsuarioLogado usuario={{ email: 'maria100%gata@gmail.com' }} />
      <Membro nome="Ana" sobrenome="Yamada" />
    <Familiaa>
      <Membro nome="Maria" sobrenome="Yamada" />
    </Familiaa>

    <Familiaa>
      <Membro nome="Leonardo" sobrenome="Uzumaki" />
      <Membro nome="Liz" sobrenome="Uzumaki" />
    </Familiaa>
    <ImparPar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador inicial={0} passo={5} />
    <Contador />
    <Botao />
    <Titulo principal="Cadastro de produto" secundario="tela de cadastro" />
    <Aleatorio min={1} max={100} />
    <Comp />
    <Comp1 />
    <Comp2 />
<Primeiro /> */}
  </SafeAreaView>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center'
  }

})


