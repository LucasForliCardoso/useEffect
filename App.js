import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Exercício 1 – Mensagem de boas-vindas
function BoasVindas() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      window.alert('Bem-vindo ao sistema!');
    } else {
      Alert.alert('Boas-vindas', 'Bem-vindo ao sistema!');
    }
  }, []); // array vazio: roda só uma vez, quando o componente carrega

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 1 – Boas-vindas</Text>
      <Text>O alerta aparece uma única vez ao carregar.</Text>
    </View>
  );
}

// Exercício 2 – Contador com monitoramento
function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('O contador foi alterado!');
  }, [contador]); // roda sempre que "contador" mudar

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 2 – Contador</Text>
      <Text style={styles.valor}>{contador}</Text>
      <View style={styles.row}>
        <Button title="Diminuir" onPress={() => setContador(contador - 1)} />
        <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      </View>
    </View>
  );
}

// Exercício 3 – Alterando o título
function AlterarTitulo() {
  const [nome, setNome] = useState('');
  const [titulo, setTitulo] = useState('Olá!');

  useEffect(() => {
    const novoTitulo = nome.trim() ? `Olá, ${nome}!` : 'Olá!';
    setTitulo(novoTitulo);

    // No navegador, também altera o título da aba
    if (Platform.OS === 'web') {
      document.title = novoTitulo;
    }
  }, [nome]); // roda sempre que "nome" mudar

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Exercício 3 – Título</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
    </View>
  );
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BoasVindas />
      <Contador />
      <AlterarTitulo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, gap: 16 },
  card: {
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  valor: { fontSize: 40, textAlign: 'center', fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
});