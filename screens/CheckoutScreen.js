import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';

export default function CheckoutScreen() {
  const route = useRoute();
  const { name, location, service, price } = route.params; // Data passed from the ProfileScreen
  const [loading, setLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  // Create payment preference
  const createPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://your-server-url.com/create_preference', {
        serviceTitle: service,
        price: price,
      });
      const { id } = response.data;

      // Redirect to MercadoPago's checkout page
      setCheckoutUrl(`https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${id}`);
    } catch (error) {
      console.error('Error creating payment preference:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle payment once the user clicks "Proceed to Checkout"
  const handlePayment = async () => {
    if (checkoutUrl) {
      const result = await WebBrowser.openBrowserAsync(checkoutUrl);
      console.log(result);
    }
  };

  useEffect(() => {
    createPayment(); // Create payment preference on screen load
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.serviceName}>Service: {service}</Text>
      <Text style={styles.price}>Price: R$ {price}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4285F4" />
      ) : (
        <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  checkoutButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
