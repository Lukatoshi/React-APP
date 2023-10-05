import React, { useState } from 'react';
import {View,Text,TextInput,Switch,Pressable,Picker,} from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

const App = () => {
  const [dados, setDados] = useState({
    titleResult: '',
    nome: '', idade: '', tiposexo: '', escolar: '', slidervalue: '', nasc: '', dadosInformados: '',input01: '',
    input02: '', status: false, valor: 0, sexo: 0, escolaridade: 0,
    });

  const [sexos] = useState([
    { nome: 'Gênero' },
    { nome: 'Masculino', sexo: 'Masculino' },
    { nome: 'Feminino', sexo: 'Feminino' },
  ]);

  const [escolaridades] = useState([
    { nome: 'Nível de Escolaridade' },
    { nome: 'Ens. Fundamental Incompleto', escolaridade: 'Ensino Fundamental Incompleto' },
    { nome: 'Ens. Fundamental Completo', escolaridade: 'Ensino Fundamental Completo' },
    { nome: 'Ens. Médio Incompleto', escolaridade: 'Ensino Médio Incompleto' },
    { nome: 'Ens. Médio Completo', escolaridade: 'Ensino Médio Completo' },
    { nome: 'Ens. Superior Incompleto', escolaridade: 'Ensino Superior Incompleto' },
    { nome: 'Ens. Superior Completo', escolaridade: 'Ensino Superior Completo' },
  ]);

  const confirmar = () => {
     const novoDados = {
      ...dados,
      titleResult: 'Dados informados:',
      nome: 'Nome: ' + dados.input01,
      idade: 'Idade: ' + dados.input02,
      tiposexo: 'Sexo: ' + sexos[dados.sexo].nome,
      escolar: 'Formação: ' + escolaridades[dados.escolaridade].escolaridade,
      slidervalue: 'Limite disponível: R$' + dados.valor.toFixed(0) + ',00',
      nasc: 'Brasileiro: ' + (dados.status ? 'Sim' : 'Não'),
    };

    setDados(novoDados);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.textoConta}>Abertura de Conta</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:10, marginRight:10 }}>
        <Text style={styles.textoPrincipal}>Nome:</Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto01) => setDados({ ...dados, input01: texto01 })}
        />
      </View>
      

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:20, marginRight:10  }}>
        <Text style={styles.textoPrincipal}>Idade: </Text>

        <TextInput
          style={styles.input}
          onChangeText={(texto02) => setDados({ ...dados, input02: texto02 })}
        />
      </View>
         
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:20}}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.textoPrincipal2}>Formação: </Text>
        </View>
        <View style={{ flex: 0.8 }}>
          <Picker
            style={styles.Picker2}
            mode="dropdown"
            selectedValue={dados.escolaridade}
            onValueChange={(itemValue) =>
              setDados({ ...dados, escolaridade: itemValue })
            }
          >
            {escolaridades.map((escolaridade, chave) => (
              <Picker.Item
                key={chave}
                value={chave}
                label={escolaridade.nome}
              />
            ))}
          </Picker>
        </View>
      </View>

   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 0.2 }}>
          <Text style={styles.textoPrincipal2}>Sexo: </Text>
        </View>

        <View style={{ flex: 0.3 }}>
          <Picker
            style={styles.Picker}
            mode="dropdown"
            selectedValue={dados.sexo}
            onValueChange={(itemValue, itemIndex) =>
              setDados({ ...dados, sexo: itemValue })
            }
          >
            {sexos.map((sexo, chave) => (
              <Picker.Item
                key={chave}
                value={chave}
                label={sexo.nome}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.textoPrincipal}>Brasileiro: </Text>
        </View>

        <Switch
          style={{ ransform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
          value={dados.status}
          onValueChange={(valorSwitch) => setDados({ ...dados, status: valorSwitch })}
          trackColor={{ false: "red", true: "#B3DDBE" }}
          
        />
        <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 25 }}>
          {dados.status ? "Sim" : "Não"}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flex: 0.5,justifyContent: 'center' }}>
          <Text style={styles.textoPrincipal}>Limite: </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginRight:10 }}>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={(valorSelecionado) =>
              setDados({ ...dados, valor: valorSelecionado })
            }
            value={dados.valor}
            step={100}
            minimumTrackTintColor='#B3DDBE'
            maximumTrackTintColor='red'
            thumbTintColor='green'
          />
        </View>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            R$ {dados.valor.toFixed(0)},00
          </Text>
        </View>
      </View>

      

      <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
        <Pressable style={styles.botaoConfirmar} title="Confirmar" onPress={confirmar}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>
      </View>

      <View style={styles.container2}>
        <Text style={{ color: 'green', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>
          {dados.titleResult}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.nome}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.idade}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.tiposexo}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.escolar}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.slidervalue}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textoDados}>{dados.nasc}</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

