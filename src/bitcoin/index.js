import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

//import do arquivo API
import api from '../services/api';

class Bitcoin extends Component {

constructor (){
    super ();

    //criar um state
    this.state = {
       vbitcoin: 0
    }

// é preciso fazer um bind P/ os métodos acessarem os states e as props
    this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);

}

//manipulando o componentDidMount P/ fazer a requisição
async componentDidMount (){
    const response = await api.get('ticker');

    let valor = response.data.CAD['buy'];

      this.setState({
            vbitcoin: valor
      });
}

// criando método P/ consultar preço do Bitcoin
async consultaPrecoBitcoin (){
    const response = await api.get('ticker');
    
    let valor = response.data.CAD['buy'];
    this.setState({
        vbitcoin: valor
    });

    alert('Preço atualizado!');
}


//construindo a interface gráfica
render (){
    return(
        <View style={styles.container}>

<Image 

source={require('../../assets/bitcoin.png')}
style={{width:450, height:169}}
resizeMode='center'
/>

<Text style={styles.textoBitcoin}> R$ {this.state.vbitcoin} </Text>

<TouchableOpacity style={styles.botao} onPress={this.consultaPrecoBitcoin}>
       <Text style={styles.textoBotao}> Atualizar </Text>
</TouchableOpacity>

        </View>
    );
}

}  // fecha a classe Bitcoin

export default Bitcoin;

// criando a estilização dos componentes
const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center'
    },

   textoBitcoin:{
    fontSize:32,
    color:'#363636'
},

botao:{
    backgroundColor:'#FFA500',
    marginTop:50,
    width:300,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
},

textoBotao:{
    fontSize:32,
    color: '#FFF'
}

});