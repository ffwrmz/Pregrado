import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInLeft } from 'react-native-reanimated'

const Home = () => {
  const router = useRouter();

  const goPantalla1 = () => {
    router.replace('/pantalla1')
  }

  const goPantalla2 = () => {
    router.replace('/pantalla2')
  }

  return(
    <SafeAreaView style ={{flex:1,padding:16, backgroundColor: '#ecdede'}}>

      <SafeAreaView style={{ padding: 16, flex: 1 }}>
      
            <Animated.View
              entering={FadeInLeft.duration(500)}
              style={{ flex: 1 }}
            >
    <Text style={styles.titulo} >Menu Clase 01 </Text>

    <Pressable 
      onPress={goPantalla1}
      style={ ({pressed})=> [
        styles.button,
        pressed?{opacity:0.7}:{opacity:1}
      ] }> 
      <Text style={styles.TextButton}>  Pantalla 1</Text>
    </Pressable>

    <Pressable 
      onPress={goPantalla2}
      style={ ({pressed})=> [
        styles.button,
        pressed?{opacity:0.7}:{opacity:1}
      ] }> 
      <Text style={styles.TextButton}>  Pantalla 2</Text>
    </Pressable>
</Animated.View>
    </SafeAreaView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:28,
    color:'#db9e9e',
    fontWeight:'bold'
  },
  button:{
    textAlign:'center',
    backgroundColor:'#ca7676',
    color:'#fff',
    marginVertical:16,
    padding:16,
    borderRadius:8
  },
  TextButton:{
    textAlign:'center',
    color:'#fff',
  }

})

export default Home