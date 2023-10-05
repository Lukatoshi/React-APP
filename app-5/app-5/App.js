import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

const App = () => {
  const [classificacao, setClassificacao] = useState('');
  const [input01, setInput01] = useState('');
  const [input02, setInput02] = useState('');

  const entrar = () => {
    const resultado = input01 / (input02 * input02);

    if (resultado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (resultado >= 18.5 && resultado < 25) {
      setClassificacao('Peso Normal');
    } else if (resultado >= 25 && resultado < 30) {
      setClassificacao('Sobrepeso');
    } else if (resultado >= 30 && resultado < 35) {
      setClassificacao('Obesidade Grau I');
    } else if (resultado >= 35 && resultado < 40) {
      setClassificacao('Obesidade Grau II');
    } else if (resultado >= 40) {
      setClassificacao('Obesidade Grau III ou Mórbida');
    }
  };

  const imgIMC =
    'https://th.bing.com/th/id/OIP.gCf3Yd4c8ire58Xl3iy74QHaEw?pid=ImgDet&rs=1';

  return (
    <View style={styles.container}>
      <Text style={styles.textoLogo}>Cálculo do IMC</Text>

      <Image
        source={{ uri: imgIMC }}
        style={{ width: '70%', height: '30%', border:'solid', borderColor:'orange', borderRadius:25 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={(texto01) => setInput01(texto01)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite Altura (ex:1.80)"
        onChangeText={(texto02) => setInput02(texto02)}
      />

      <Pressable style={styles.botaoCalc} title="Calcular" onPress={entrar}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.textoClassificacao}>{classificacao} </Text>
    </View>
  );
};

export default App;
