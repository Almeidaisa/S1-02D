import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baratas</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          As baratas são insetos onipresentes, muitas vezes encontrados em ambientes urbanos. Dotadas de uma incrível capacidade de sobrevivência, podem se adaptar a uma variedade de condições e são notoriamente difíceis de erradicar. Apesar de serem consideradas pragas, algumas espécies desempenham papéis importantes na decomposição de matéria orgânica. No entanto, sua presença em residências e estabelecimentos comerciais geralmente é indesejada, exigindo medidas de controle e higiene.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcbdb',
    margin: '50px',
    border: '5px solid black',
    maxWidth:'800px'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
