import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#564626',
    alignItems: 'center',
  },

  area: {
    marginTop: 80,
   
  },

  textoLogo: {
    
    fontSize: 28,
    color: 'white',
    marginVertical: 20
  }, 

  botaoCalc:{
    width: 300,
    height: 50,
    borderRadius:6,
    margin: 20,
    backgroundColor: 'orange',
    justifyContent:'center',
  },


  textoBotao: {
    textAlign: 'center',
    justifyContent:'center',
    height: 45,
    fontSize: 25,
    color: '#fff',
  },

  input: {
    color:'white',
    textAlign: 'center',
    height: 45,
    borderWidth: 1,
    borderRadius:6,
    borderColor: 'orange',
    margin: 15,
    fontSize: 20,
    paddingHorizontal: 60,
    width: 320,
  },
  
  textoClassificacao: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
  },


});

export { styles };