import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.textoInicial}
        animation="pulse"
        iterationCount="infinite"
      >
        Vagas de Emprego
      </Animatable.Text>
      <ScrollView>
        <Animatable.View
          style={[styles.box, styles.swingBox]}
          animation="swing"
          iterationCount="infinite"
          direction="alternate"
        >
          <Text style={styles.subtitulo}>Desenvolvedor Backend</Text>
          <Text style={styles.textoCard}>Salário: R$ 3000,00</Text>
          <Text style={styles.textoCard}>Descrição: "Esta posição envolve o desenvolvimento e manutenção de sistemas e aplicativos do lado do servidor. O candidato ideal terá conhecimento em linguagens de programação back-end, como Python, Java ou Node.js, e será responsável por criar APIs, gerenciar bancos de dados e garantir o desempenho e a escalabilidade dos serviços."</Text>
          <Text style={styles.textoCard}>Contato: (55) 33329000213</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.box, styles.swingBox]}
          animation="rubberBand"
          iterationCount="infinite"
          direction="alternate"
          
        >
          <Text style={styles.subtitulo}>Engenheiro de Dados</Text>
          <Text style={styles.textoCard}>Salário: R$ 3000,00</Text>
          <Text style={styles.textoCard}>Descrição: "Será necessário trabalhar com ferramentas de Big Data, como Hadoop e Spark, e colaborar com equipes para garantir a qualidade e a acessibilidade dos dados."</Text>
          <Text style={styles.textoCard}>Contato: (55) 3332900021311</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.box, styles.swingBox]}
          iterationCount="infinite"
          direction="alternate"
          animation="bounce"
        >
          <Text style={styles.subtitulo}>Desenvolvedor Frontend</Text>
          <Text style={styles.textoCard}>Salário: R$ 2500,00</Text>
          <Text style={styles.textoCard}>Descrição: "Desenvolver experiências de usuário intuitivas e garantir a compatibilidade entre navegadores e dispositivos. Conhecimento em HTML, CSS e JavaScript é essencial."</Text>
          <Text style={styles.textoCard}>Contato: (55) 33329000213115</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.box, styles.swingBox]}
          iterationCount="infinite"
          direction="alternate"
          animation="slideInUp"
        >
          <Text style={styles.subtitulo}>Analista Dados Júnior</Text>
          <Text style={styles.textoCard}>Salário: R$ 1500,00</Text>
          <Text style={styles.textoCard}>Descrição: "E Você será responsável por criar layouts, wireframes e protótipos, além de garantir que a interface seja intuitiva e agradável para os usuários. O trabalho inclui colaboração com equipes de desenvolvimento e testes de usabilidade."</Text>
          <Text style={styles.textoCard}>Contato: (55) 33329000</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.box, styles.swingBox]}
          iterationCount="infinite"
          direction="alternate"
          animation="fadeIn"
        >
          <Text style={styles.subtitulo}>UX Designer</Text>
          <Text style={styles.textoCard}>Salário: R$ 2000,00</Text>
          <Text style={styles.textoCard}>Descrição: "Cuidara da experiencia do usuario"</Text>
          <Text style={styles.textoCard}>Contato: (55) 3332900021</Text>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default App;