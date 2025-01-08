import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
      <ImageBackground
        source={{ uri: 'https://drive.google.com/uc?export=view&id=1ZC7KfhiiP2d30K0QGAENYfg84XnEZ8qm' }}
        style={styles.background}
      >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          style={styles.logo}
          source={{
            uri: 'https://drive.google.com/drive/u/0/folders/1UeigTAUeLOKE5sK6uFFVJ1P_MtLYaE_H',
          }}
        />

        {/* Texto de Boas-Vindas */}
        <Text style={styles.welcomeText}>Precisa de uma limpeza Profissional?!</Text>
        <Text style={styles.subText}>Como deseja continuar?</Text>

        {/* Botão para ir à segunda página */}
        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Ir para a Segunda Página</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Para cobrir toda a tela
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    top: 70,
    width: 300,
    height: 200,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 90,
  },
  subText: {
    fontSize: 14,
    marginTop: 1,
    marginBottom: 15,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    padding: 12,
    width: '70%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
});
