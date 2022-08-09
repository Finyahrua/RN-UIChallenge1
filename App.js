import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <TailwindProvider>
      <HomeScreen/>
    </TailwindProvider>
  );
}

