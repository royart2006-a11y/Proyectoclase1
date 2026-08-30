import React from "react";
import {createBottomTabNavigator}from"@react-navigation/bottom-tabs";
import Profile from "../features/Profile";
import Settings from "../features/Settings";

export type tabsParamList={
    Profile: undefined,
    Settings:undefined,
    HomeTab:{email:string},
};
const Tab= createBottomTabNavigator<tabsParamList>();
export default function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
    );
}
    // 1.Declarar el tipado de las pantallas con sus parametros
 //2Crear el tabs navigator encargado de manejar la navegacion
 // //3 Utilizar el navegador por tbs
