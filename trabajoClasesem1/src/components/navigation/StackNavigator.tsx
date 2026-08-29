// 1. declarar el tipado de las pantallas con sus parámetros
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

type RootStackParamList = {
  Login: undefined,
  Home: undefined,
  Register: undefined
};

// 2. crear el stack navigator encargado de manejar la navegación
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. utilizar el stack de navegación
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}


