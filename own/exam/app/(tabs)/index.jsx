import { View, Text , StyleSheet , ImageBackground , Pressable} from 'react-native'
import React from 'react'

import { Link } from 'expo-router';

import testimage from "@/assets/images/home.jpg"


export default function index() {
  const name = "Buddy";

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source = {testimage}
        style = {styles.image}
      >
      
      <Text style = {styles.text}>Welcome Back, {name}!</Text>

      {/* <Link href = "/(stopwatch)/App" style = {{ marginHorizontal : 'auto'}} asChild>
      <Pressable style = {styles.button}>
        <Text style = {styles.buttontext}>All Project</Text>  
      </Pressable>
      </Link> */}
      
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center',
  },
  text: {
    marginTop : 350,
    fontSize: 25,
    color: 'aqua',
    fontWeight : 'bold',
    textAlign : 'center',
    backgroundColor :' rgba(0,0,0,0.5)',
    paddingTop : 10,
    paddingBottom : 10,
    },
    link: {
    fontSize: 25,
    color: 'aqua',
    fontWeight : 'bold',
    textAlign : 'center',
    backgroundColor :' rgba(0,0,0,0.5)',
    paddingTop : 10,
    paddingBottom : 10,
    textDecorationLine : 'underline',
    padding : 4,
    marginTop : 20
    },
    button: {
    fontSize: 25,
    color: 'aqua',
    fontWeight : 'bold',
    textAlign : 'center',
    backgroundColor :' rgba(0,0,0,0.7)',
    paddingTop : 10,
    paddingBottom : 10,
    textDecorationLine : 'underline',
    padding : 4,
    marginTop : 20,
    color : 'white',
    borderRadius : 7,
    },
    buttontext:{
      color : 'white',
      paddingLeft : 10,
      paddingRight : 10,
    }
})  


