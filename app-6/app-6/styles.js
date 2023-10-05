import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  textoLogo: {
    fontSize: 28,
    color: 'red',
    marginVertical: 20,
    textDecorationLine:'underline '
    
      },

  textoSecundario: {
    fontSize: 20,
    color: '#f00',
    marginVertical: 20

  },

  botaoCalc: {
    borderRadius: 100,
    borderColor: '#7fc',
    justifyContent:'center',
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: 'red',
  },


  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 35,
    fontSize: 25,
    color: '#fff',
  },
  

  textoResultado: {
    textAlign: 'center',
    fontSize: 45,
    color: 'green',
    textDecorationLine: 'bold',
  },


});

export { styles };