import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ReactPaginate from 'react-paginate';
import { styles } from './style';

function App() {
  
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <View >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 25 }}>Perfis Profissionais da Dupla</Text>
        
      </View>

      {currentPage === 0 && (
        
        <View style={{ marginLeft: 5 }}>
        <Image
          source={{
            uri:
              'https://media.licdn.com/dms/image/C4D03AQGn61ZHMkBbJQ/profile-displayphoto-shrink_400_400/0/1648599841011?e=1701302400&v=beta&t=4AXByNtT0iiw7f2mgfaQLm1E5GK_TSdByRWGjOoVclM',
          }}
          style={{ width: 120, height: 120, marginTop: 10, marginLeft: 100, borderRadius:60}}
        />
          <Text style={{ color: 'blue', marginTop: 15 }}>Dados pessoais:</Text>
          <Text>Juliana Alves de Aguiar, 31 anos, Projetista de Automação</Text>

          <Text style={{ color: 'blue', marginTop: 15 }}>Formação:</Text>
          <Text>Análise e Desenvolvimento de Sistemas - FATEC</Text>

          <Text style={{ color: 'blue', marginTop: 15 }}>Experiência:</Text>
          <Text>Técnica em projetos elétricos - CPFL Energia</Text>
          <Text>Técnica de medição - STAR Engenharia</Text>
          <Text>Projetista Cadista - Petrobras</Text>
        </View>
      )}
        
      {currentPage === 1 && (

         <View style={{ marginLeft: 5 }}>
        <Image 
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/92442944?v=4',
          }}
          style={{ width: 120, height: 120, marginTop: 10, marginLeft: 100, borderRadius:60}}
        />
          <Text style={{ color: 'red', marginTop: 15 }}>Dados pessoais:</Text>
          <Text>Lucas Gonçalo de Jesus Lourenço, 23 anos, Desenvolvedor Web PHP</Text>

          <Text style={{ color: 'red', marginTop: 15 }}>Formação:</Text>
          <Text>Análise e Desenvolvimento de Sistemas - FATEC</Text>

          <Text style={{ color: 'red', marginTop: 15 }}>Experiência:</Text>
          <Text>Operador de Caixa - Assai Atacadista</Text>
          <Text>Empacotador - Rede KRILL </Text>
        
        </View>
        
      )}
 <View style={styles.pageChange}>
      <ReactPaginate 
      pageCount={2}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      previousLabel={'Anterior'}
      nextLabel={'Próxima'}
      containerClassName={'pagination'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      activeClassName={'active'}
      previousClassName={'customPreviousButton'} 
      nextClassName={'customNextButton'} 
      breakClassName={'break-me'}
      
    />
  </View>
     
    </View>
  );
}


export default App;