import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Welcome from './screens/Welcome'
import BookViewPager from './screens/BookViewPager'
import ImageAndButton from './screens/ImageAndButton'
import DetailView from './screens/DetailView'

// create stack navigator
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} 
        options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} 
        options={{headerShown: false}}/>
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name='BookViewPager' component={BookViewPager} 
        options={{headerShown: false}} />
        <Stack.Screen name='ImageAndButton' component={ImageAndButton} 
        options={{headerShown: false}} />
        <Stack.Screen name='DetailView' component={DetailView} 
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App