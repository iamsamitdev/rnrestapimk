import { StyleSheet, Image, View, StatusBar, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import PagerView from 'react-native-pager-view'

const BookViewPager = () => {

    // สร้างตัวแปรเก็บความกว้างและความสูงของหน้าจอ
    // const screen = Dimensions.get('window')

    // สร้างตัวแปร state ดูการหมุนหน้าจอ
    // const [orientation, setOrientation] = useState('PORTRAIT')

    // useEffect(() => {
    //     Dimensions.addEventListener('change', ({window: {width, height}}) => {
    //       if(width<height){
    //         setOrientation("PORTRAIT")
    //       }else{
    //         setOrientation("LANDSCAPE")
    //       }
    //     })
    // },[])

    // console.log(orientation)

    // สร้างตัวแปรเก็บรายการภาพที่จะใช้แสดงผล
    const images = [
        require('../assets/images/img1.jpg'),
        require('../assets/images/img2.jpg'),
        require('../assets/images/img3.jpg'),
        require('../assets/images/img4.jpeg'),
        require('../assets/images/img5.jpg'),
    ]

    // สร้างตัวแปร state เพื่อเก็บค่าหน้าที่แสดงอยู่
    const [currentPage, setCurrentPage ] = useState(0)

    // สร้างตัวแปร ref เพื่อเก็บค่า PagerView
    const pagerRef:any = useRef(null)

    // สร้างฟังก์ชันเช็คหน้าที่ถูกเลือกและแสดงผล
    const onPageSelected = (e: any) => {
        setCurrentPage(e.nativeEvent.position)
    }

    // สร้างฟังก์ชันกดปุ่มเลขหน้า
    const onIndicatorPress = (index: number) => {
        pagerRef.current.setPage(index)
        setCurrentPage(index)
    }

  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />

        <PagerView 
            ref={pagerRef}
            initialPage={currentPage}
            onPageSelected={onPageSelected}
            style={{flex: 20}}>
            {
                images.map((image, index) => (
                    <View key={index}>

                        <Image 
                            source={image}
                            style={styles.image}
                            resizeMode='cover'
                        />
                        
                    </View>
                ))
            }
        </PagerView>

        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.indicatorContainer}>
            {
                images.map((image, index) => (
                    
                    <TouchableOpacity 
                    key={index} 
                    style={[
                        styles.indicator, 
                        index === currentPage ?
                        styles.activeIndicator :
                        styles.inactiveIndicator
                    ]}
                    onPress={()=>onIndicatorPress(index)}>
                        <Text style={styles.pageNumber}>{ index + 1 }</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    indicatorContainer: {
        flex: 1,
        // position: 'absolute',
        // height: 50,
        // width: '100%',
        // bottom: 10,
        // left: 0,
        // right: 0,
        flexDirection: 'row', 
        justifyContent:'center',
        alignItems: 'center',
        // zIndex: 200,
    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIndicator: {
        backgroundColor: 'orange',
    },
    inactiveIndicator: {
        backgroundColor: 'white',
    },
    pageNumber: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default BookViewPager