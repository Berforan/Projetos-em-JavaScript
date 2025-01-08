import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CheckPrem({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout - Serviço Premium</Text>
      <Text style={styles.info}>
        Você selecionou o serviço Premium. Este serviço inclui limpeza completa, higienização e organização.
      </Text>
      <Text style={styles.price}>Total: R$ 480,00</Text>

      <View style={styles.buttonContainer}>
        <Button title="Finalizar Pagamento" onPress={() => alert('Pagamento Confirmado!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
