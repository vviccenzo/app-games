import React from 'react';
import { SignIn } from './src/screens/SignIn';

import AppLoading  from 'expo-app-loading'

// Carregamento de fontes
import { useFonts } from 'expo-font';
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
  
export default function App(){

  // Exportar fontes
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent/>
      <SignIn />
    </Background>
  );
}