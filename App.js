import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>First page!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const IMAGE_URLS =
{
  sale:
  'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
};

const setBackground = (image)
{
  document.body.style.background = "url('"+IMAGE_URLS.[image]+"')";
};
setBackground('sale');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
