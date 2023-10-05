import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    res = this.state.numero1 * this.state.numero2
    this.setState({
      resultado: 'Resultado: ' + res
    });
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Multiplicador de Números</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número..."
        onChangeText={(num1) => this.setState({numero1: num1})}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número..."
        onChangeText={(num2) => this.setState({numero2: num2})}
      />
      <Text style={styles.button}>
      <Button title="Calcular" onPress={this.calcular} />
      </Text>
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
export default App;







