import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para os ícones
import { BlurView } from 'expo-blur'; // Para o efeito de fundo suave no card de segurança

export default function PaymentConfirmation({ route, navigation }) {
  const { servant, selectedDate } = route.params; // Recebe as informações da servidora e data selecionada da CheckStand

  return (
    <View style={styles.container}>
      {/* Mensagem de Confirmação */}
      <View style={styles.confirmationMessage}>
        <Text style={styles.title}>Agendamento Confirmado!</Text>
        <Text style={styles.subTitle}>
          Obrigado por escolher nossos serviços de limpeza. Seu agendamento foi confirmado com sucesso.
        </Text>
      </View>

      {/* Card com as informações da Servidora */}
      <View style={styles.servantInfo}>
        <Image source={{ uri: servant.image }} style={styles.servantImage} />
        <View style={styles.servantDetails}>
          <Text style={styles.servantName}>{servant.name}</Text>
          <Text style={styles.servantDetail}>Idade: {servant.age}</Text>
          <Text style={styles.servantDetail}>Experiência: {servant.experience}</Text>
          <Text style={styles.servantDetail}>Região: {servant.region}</Text>
          <Text style={styles.servantRating}>
            {servant.rating} <FontAwesome name="star" size={14} color="#FFD700" /> ({servant.reviews})
          </Text>
        </View>
      </View>

      {/* Informações da Data de Agendamento */}
      <View style={styles.agendamentoInfo}>
        <Text style={styles.agendamentoTitle}>Data do Ckeck-in:</Text>
        <Text style={styles.agendamentoDate}>{selectedDate}</Text>
      </View>

      {/* Botão para Voltar ao Início */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Voltar ao Início</Text>
      </TouchableOpacity>

      {/* Card de Mensagem de Segurança */}
      <BlurView intensity={50} tint="light" style={styles.securityCard}>
        <FontAwesome name="shield" size={24} color="#fff" />
        <View style={styles.securityTextWrapper}>
          <Text style={styles.securityTitle}>Segurança Garantida</Text>
          <Text style={styles.securityText}>
            Sua segurança é nossa prioridade. A Clean trabalha com profissionais qualificados para garantir o melhor serviço.
          </Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  confirmationMessage: {
    backgroundColor: '#4FC3F7',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  servantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  servantImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  servantDetails: {
    flex: 1,
  },
  servantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  servantDetail: {
    fontSize: 14,
    color: '#777',
    marginVertical: 2,
  },
  servantRating: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 5,
  },
  agendamentoInfo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
  },
  agendamentoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  agendamentoDate: {
    fontSize: 16,
    color: '#555',
  },
  homeButton: {
    backgroundColor: '#4FC3F7',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  securityCard: {
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Fundo suave com opacidade
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 180,
    width: '100%',
  },
  securityTextWrapper: {
    marginLeft: 15,
  },
  securityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  securityText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});
