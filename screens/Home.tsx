import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  
  const data = {
    name: 'Samit',
    age: 40
  }

  return (
    <View style={{
      flex:1, 
      alignContent: 'center', 
      alignItems: 'center', 
      justifyContent: 'center'}}>
      <View style={{marginVertical: 5, width: '90%'}}>
        <Button title='Go to About' onPress={
          ()=> navigation.push('About', {data})
        } color={'red'} />
      </View>
      <View style={{marginVertical: 5, width: '90%'}}>
        <Button title='Go to Contact' onPress={
          ()=> navigation.push('Contact')} 
          color={'green'}/>
      </View>
      <View style={{marginVertical: 5, width: '90%'}}>
        <Button title='Book View' onPress={
          ()=> navigation.push('BookViewPager')}
          color={'blue'} />
      </View>
      <View style={{marginVertical: 5, width: '90%'}}>
        <Button title='Image and Button' onPress={
          ()=> navigation.push('ImageAndButton')}
          color={'blue'} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})