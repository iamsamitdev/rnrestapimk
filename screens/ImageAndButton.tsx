import React, {useState, useRef } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native'
import PagerView from 'react-native-pager-view'
import Icon from 'react-native-vector-icons/Feather'

const ImageAndButton = ({navigation}: any) => {
  // สร้างตัวแปรเก็บรายการภาพที่จะใช้แสดงผล
  const images = [
    {
      id: 1,
      title: 'Awesome Food',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: require('../assets/images/img1.jpg'),
    },
    {
      id: 2,
      title: 'Awesome Drink',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: require('../assets/images/img2.jpg'),
    },
    {
      id: 3,
      title: 'Awesome Bakery',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: require('../assets/images/img3.jpg'),
    },
    {
      id: 4,
      title: 'Awesome Ice Cream',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: require('../assets/images/img4.jpeg'),
    },
    {
      id: 5,
      title: 'Awesome Wine',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      url: require('../assets/images/img5.jpg'),
    },
  ]

  // สร้างตัวแปร state เพื่อเก็บค่าหน้าที่แสดงอยู่
  const [currentPage, setCurrentPage] = useState(0)

  // สร้างตัวแปร ref เพื่อเก็บค่า PagerView
  const pagerRef: any = useRef(null)

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
        style={styles.imgContent}>
        {
            images.map((image, index) => (
            <View key={index}>
                {/* Image */}
                <Image source={image.url} style={styles.image} resizeMode="cover" />

                {/* Label */}
                <View style={styles.labelContent}>
                    <Text style={styles.title}>{image.title}</Text>
                    <Text style={styles.desc}>{image.desc}</Text>
                </View>

                {/* Button for zoom */}
                <TouchableOpacity
                    style={styles.zoomingButton}
                    onPress={() => navigation.push('DetailView')}>
                    <Icon name="zoom-in" size={30} color="white" />
                </TouchableOpacity>

            </View>
            ))
        }
      </PagerView>

      <View style={styles.button}>
        <Icon.Button
          name="home"
          backgroundColor={'transparent'}
          color={'white'}
          size={30}
          onPress={() => navigation.push('Home')}></Icon.Button>
        <Icon.Button
          name="grid"
          backgroundColor={'transparent'}
          color={'white'}
          size={30}
          onPress={() => {}}></Icon.Button>
        <Icon.Button
          name="image"
          backgroundColor={'transparent'}
          color={'white'}
          size={30}
          onPress={() => {}}></Icon.Button>
      </View>

      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.indicator,
              index === currentPage
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
            onPress={() => onIndicatorPress(index)}>
            <Text style={styles.pageNumber}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  zoomingButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 50,
    padding: 10,
    },
  image: {
    width: '100%',
    height: '100%',
  },
  labelContent: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    right: 0,
    left: 0,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    bottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  desc: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    paddingLeft: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  indicatorContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    backgroundColor: '#ffa500',
  },
  inactiveIndicator: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  pageNumber: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default ImageAndButton
