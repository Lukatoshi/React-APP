import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#FFF',

  },

  textoConta: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop:20,
    marginBottom:30,
  },

  textoPrincipal: {
    paddingStart:10,
    fontSize: 20,
    width:300,
    color: '#000',
    marginRight:20,
  },

  textoPrincipal2: {
  paddingStart:10,
    fontSize: 20,
    color: '#570606',
   
  },

  sexos: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center'
  },

  Picker: {
    width: 100,
    backgroundColor:'transparent',
    borderRadius:5
  },
  Picker2: {
    marginLeft:-20,
    width: 220,
    backgroundColor:'transparent',
    borderRadius:5
  },
  input: {
    padding:4,
    width: 240,
    borderRadius:5,
    fontSize: 20,
    color: '#000000',
    backgroundColor: '#BECBBF',
  },

  botaoConfirmar: {
    width: 200,
    height: 40,
    margin: 20,
    backgroundColor: '#6DD687',
     borderRadius:5
  },

  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
    color: '#000',
  },
  
  textoDados: {
    marginLeft:10,
    textAlign: 'center',
    fontSize: 18,
    color: 'blue',
    
  },
  container2: {
    flex: 1,
    marginTop: -25,
    marginBottom: 30,
    backgroundColor: '#FFF',

  },

});



export { styles };
