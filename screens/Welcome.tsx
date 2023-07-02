import { StyleSheet, Image, TouchableOpacity, Text, StatusBar  } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const Welcome = ({navigation}:any) => {

    const Done = ({...props}) => (
        <TouchableOpacity
        {...props}
        >
        <Text style={{fontSize:16, marginHorizontal:20}}>เสร็จสิ้น</Text>
        </TouchableOpacity>
    )

    return (
        <>
            <StatusBar hidden={true} />
            <Onboarding
                onSkip={() => navigation.replace("Home")}
                onDone={() => navigation.replace("Home")}
                skipLabel="ข้าม"
                nextLabel="ถัดไป"
                DoneButtonComponent = {Done}
                pages={[
                    {
                        backgroundColor: 'teal',
                        image: <Image source={require('../assets/images/slide1.png')} 
                        style={{ width:'50%', height: '50%'}} />,
                        title: 'Food Delivery',
                        subtitle: 'Order food from our app and we will deliver it to you',
                    },
                    {
                        backgroundColor: 'magenta',
                        image: <Image source={require('../assets/images/slide2.png')} style={{width:'50%', height: '50%'}} />,
                        title: 'Clean and Safe',
                        subtitle: 'We make sure that our food is clean and safe',
                    },
                    {
                        backgroundColor: 'orange',
                        image: <Image source={require('../assets/images/slide3.png')} style={{width:'50%', height: '50%'}} />,
                        title: 'Love than Food more',
                        subtitle: 'Love the food that you order and we will deliver it to you',
                    },
                ]}
            />
        </>
    )
}

export default Welcome

const styles = StyleSheet.create({})