import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderRadius:6,
      borderColor: '#b2b',
      margin: 15,
      fontSize: 14,
      padding: 10,
      color:'#b2b'
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 20,
      color: '#b2b',
    },
    titulo:{
      fontSize: 18,
      color: '#b2b',
      alignSelf: 'center',
      marginTop: 15
    },
    button:{
      marginLeft:120,
    }
  });


  export {styles};