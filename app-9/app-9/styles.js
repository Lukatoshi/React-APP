import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box: {
    backgroundColor: '#fff',
    height: 230,
    borderColor: '#000',
    borderWidth: 2,
    padding: 2,
    margin: 15,
    overflow:'scroll'
  },
  swingBox: {
    animationDuration: 1500,
  },
  textoInicial: {
    fontFamily: 'sans-serif',
    fontSize: 28,
    color: '#A2a',
    marginVertical: 10,
    textAlign: 'center',
    textTransform:'uppercase'
  },
  subtitulo: {
    fontSize: 22,
    color: '#155523',
    marginVertical: 5,
  },
  textoCard: {
    fontSize: 15,
    color: '#000',
    marginVertical: 7,
  },
});


export { styles };