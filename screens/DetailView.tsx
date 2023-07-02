import React, {useRef} from 'react'
import {Image, Dimensions, Animated, Easing } from 'react-native'
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler'

const DetailView = () => {

    const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
    const scale = useRef(new Animated.Value(1)).current
    const translationX = useRef(new Animated.Value(0)).current
    const translationY = useRef(new Animated.Value(0)).current
    const baseScale = useRef(new Animated.Value(1)).current
    const pinchRef = useRef(null)
    const panRef = useRef(null)

    const onPinchGestureEvent = Animated.event([{nativeEvent: {scale}}], {
      useNativeDriver: true,
    })

    const onPanGestureEvent = Animated.event(
      [{nativeEvent: {translationX, translationY}}],
      {useNativeDriver: true},
    )

    const onPanHandlerStateChange = ({nativeEvent}: any) => {
      if (nativeEvent.state === State.END) {
        Animated.timing(translationX, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start()
        Animated.timing(translationY, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start()
      }
    }

    return (
      <GestureHandlerRootView style={{flex: 1}}>
      <PinchGestureHandler
        ref={pinchRef}
        simultaneousHandlers={panRef}
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPanHandlerStateChange}>
        <Animated.View style={{flex: 1}}>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={pinchRef}
            onGestureEvent={onPanGestureEvent}
            onHandlerStateChange={onPanHandlerStateChange}>
            <Animated.View
              style={{
                width: screenWidth,
                height: screenHeight,
                transform: [
                  {translateX: translationX},
                  {translateY: translationY},
                  {scale: Animated.multiply(scale, baseScale)},
                ],
              }}>
              <Image
                source={require('../assets/images/img1.jpg')}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </PinchGestureHandler>
      </GestureHandlerRootView>
    )
}

export default DetailView
