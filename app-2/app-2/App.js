import React, { useState } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const pessoa = 'Contador de Pessoas';

  function contador1() {
    setContador(contador + 1);
  }

  function contador2() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>{pessoa}</Text>

      <Text
        style={{
          fontSize: 50,
          backgroundColor:'blue',
          color: 'white',
          marginLeft:100,
          width:130,
          marginBottom:10,
          display: 'flex',
          borderRadius:30,
          justifyContent: 'center',
          border:'solid'
        }}>
        {contador}
      </Text>

      <Text style={styles.texto }>{setContador}</Text>
        
        <Button title="+" onPress={contador1} />
        <Button title="-" onPress={contador2} />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 80,
  },

  texto: {
    textAlign: 'center',
    
    fontSize: 25,
    marginBottom:20,
    color: 'black',
  },


 
});
