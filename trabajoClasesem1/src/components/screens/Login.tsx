import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
   
  },
});