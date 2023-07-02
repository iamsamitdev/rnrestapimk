import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const About = () => {

  const route = useRoute()
  const { data }:any = route.params

  return (
    <View>
      <Text>
        Name { data.name }, Age { data.age }
      </Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})