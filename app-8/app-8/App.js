import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

const App = () => {
  
  let img ='https://img.elo7.com.br/product/original/3B70162/numero-1-realeza-azul-mdf-60cm-numero-idade-em-mdf.jpg';
  let img2 = 'https://cdn5.colorir.com/desenhos/color/202122/numero-2-letras-e-numeros-numeros-1652403.jpg';
  let img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSoKqjFNQv7ZKAAnLtvBljO77G5QnKUVwYQ&usqp=CAU';
  let img4 ='https://amsjpedreira.com.br/wp-content/uploads/2022/08/BEN_6170_1_1000x1000_38247d0ccded750d446878e41bf1d9f5.jpg';
  let img5 ='https://cdn.pixabay.com/photo/2015/04/04/19/13/five-706893_1280.jpg';
  let img6 ='https://images.tcdn.com.br/img/img_prod/738068/numero_6_em_eva_10033_1_bc56c80299e0553a0e533d163dad6492.png';
  
  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Anúncios</Text>
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}>
            <Image source={{ uri: img }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"Esse é o 1 amigão!"</Text>
          </View>
          <View style={styles.box2}>
            <Image source={{ uri: img2 }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"Agora você vê o 2!"</Text>
          </View>
          <View style={styles.box3}>
            <Image source={{ uri: img3 }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"o 3 ficou com ciúmes e quis aparecer!"</Text>
          </View>
          <View style={styles.box4}>
            <Image source={{ uri: img4 }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"Esse 4 é elegante mesmo, por isso o número favorito do JHIN!"</Text>
          </View>
          <View style={styles.box5}>
            <Image source={{ uri: img5 }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"Com uma Palma você tem ele, esse é o 5"</Text>
          </View>
          <View style={styles.box6}>
            <Image source={{ uri: img6 }} style={{ borderRadius: 10, width: 100, height: 80, marginTop: 50 }} />
            <Text style={styles.textoSecundario}>"Alguns chegam nele na mesma mão, mas normalmente a gente usa as duas kk, esse é o 6"</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default App;
