import {View,Text,}from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";


type HomeProps = NativeStackScreenProps <RootStackParamList,'HomeScreen'>;

export default function Home({route}:HomeProps){
    //Extaccion de propiedad de paramatros de ruta por medio de destructuiring
    const{email}= route.params;
return(
        <View>
           <Text> Bienvenido</Text>
        </View>
    )
    }