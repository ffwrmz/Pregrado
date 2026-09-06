import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import FadeInView from '@/components/FadeInView'

const pantalla1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FadeInView>

        <Header title="Pantalla 1" />

        <View style={styles.content}>
          <Image 
            source={require('../../assets/images/isaac.png')}
            style={styles.image}
          />
          <Text style={styles.name}>Fernanda Ramírez</Text>
          <Text style={styles.subname}>Desarrolladora Full Stack</Text>
        </View>

      </FadeInView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#f0d1d1',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
  },
  name: {
    color: '#5c5151',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subname: {
    color: '#5c5151',
    fontSize: 14,
    fontWeight: 'bold'
  },
})

export default pantalla1