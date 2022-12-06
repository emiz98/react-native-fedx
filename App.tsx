import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex items-center justify-center h-full bg-blue-500">
      <Text className='text-white font-medium text-lg'>Welcome to FedX Clone</Text>
      <StatusBar style="auto" />
    </View>
  );
}