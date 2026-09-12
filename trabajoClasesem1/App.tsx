
// Importamos React para poder usar JSX.
//import React from 'react';

// Importamos el componente que contiene la demo de useEffect.
//import UseEffectDemo from './src/components/screens/UseEffectDemo';

// App es el componente principal de la aplicación.
//export default function App() {
  // Mostramos directamente UseEffectDemo para probar la pantalla
  // sin pasar por el sistema de navegación.
  //return <UseEffectDemo />;
//}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigation/StackNavigator';

export default function App() {
return(
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
);
}
