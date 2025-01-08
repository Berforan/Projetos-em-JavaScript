import "react-native-gesture-handler"; // Certifique-se de que isso está no topo
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // Tela de exemplo
import SecondScreen from "./screens/SecondScreen"; // Tela de exemplo
import ProfileScreen from "./screens/ProfileScreen"; // Novo componente
import CheckStand from "./screens/CheckStand"; // Tela de checkout do serviço Standard
import CheckPrem from "./screens/CheckPrem"; // Tela de checkout do serviço Premium
import PaymentConfirmation from "./screens/PaymentConfirmation"; // Tela de confirmação de pagamento

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tela principal Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Remove cabeçalho da tela Home se necessário
        />
        {/* Tela secundária Second */}
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ headerShown: false }} // Remove cabeçalho padrão
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }} // Remove cabeçalho padrão
        />
        {/* Adicionando as telas de checkout */}
        <Stack.Screen
          name="CheckStand"
          component={CheckStand}
          options={{ headerShown: true, title: "Checkout Standard" }} // Mostra o cabeçalho com o título 'Checkout Standard'
        />
        <Stack.Screen
          name="CheckPrem"
          component={CheckPrem}
          options={{ headerShown: true, title: "Checkout Premium" }} // Mostra o cabeçalho com o título 'Checkout Premium'
        />
        {/* Tela de confirmação de pagamento */}
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmation}
          options={{ headerShown: false }} // Pode ou não mostrar o cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
