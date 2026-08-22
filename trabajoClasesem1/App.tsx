import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from './src/components/CustomButton';
import React, { useState } from 'react';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // nuevo estado

  return (
    <View style={styles.container}>
      <Text>Ingrese su información</Text>
      <CustomInput 
        onChangeText={setEmail} 
        value={email} 
        placeholder={'Ingrese su correo'} 
        type='email'     
      />
      <CustomInput 
        onChangeText={setPassword}   //antes estaba setEmail
        value={password}             // antes estaba email, que gran cambio.
        placeholder={'Ingrese su contraseña'} 
        type='password'     
      />
      <CustomButton title ="Ingresar" 
    onPress={()=>{console.log("1")}}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
});