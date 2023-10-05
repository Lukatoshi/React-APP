import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      precoAlcool: 0,
      precoGasolina: 0,
      resultado: ''
    };
    
    this.pegaPrecoAlcool = this.pegaPrecoAlcool.bind(this);
    this.pegaPrecoGasolina = this.pegaPrecoGasolina.bind(this);
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    res = this.state.precoAlcool / this.state.precoGasolina
    if (res > 0.7)
      texto = 'Abastecer com Gasolina'
    else
      texto = 'Abastecer com Alcool'
    this.setState({
      resultado: texto
    });
  }

  pegaPrecoAlcool(preco){
    this.setState({precoAlcool: preco});
  }

  pegaPrecoGasolina(preco){
    this.setState({precoGasolina: preco});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Gasolina ou Álcool </Text>
 
      <Image
        source={{uri: 'https://th.bing.com/th/id/OIP.Vsyt8SjPt3o4KnnRWTQ7nwHaFK?w=202&h=141&c=7&r=0&o=5&pid=1.7'}}
        style={{ width: 200, height: 120, alignSelf: 'center', marginTop: 5,  marginBottom: 20, borderRadius: 10,}}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do alcool"
        onChangeText={this.pegaPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da gasolina"
        onChangeText={this.pegaPrecoGasolina}
      />

      <Button title="Escolha" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
export default App;


