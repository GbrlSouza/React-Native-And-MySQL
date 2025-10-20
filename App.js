import React, { use } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-icons/fa';
import axios from 'axios';

function App() {
  const [id, setID] = useState([]),
        [lista, setLista] = useState([]),
        [nome, setNome] = useState([]),
        [email, setEmail] = useState([]),
        [senha, setSenha] = useState([]);

  useEffect(() => {
    listarDados();
  });

  async function listarDados() {
    const resultado = await axios.get('http://localhost/apireactnative/listar.php').then((response) => {
      setLista(response.data);
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
