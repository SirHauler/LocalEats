import { Text, View, Image, StyleSheet } from "react-native"
import Carousel from 'react-native-reanimated-carousel';

const photoCarousel = (photoURIs: any) =>{

    if (photoURIs.length == 0) {
      return (
      <Text style={{fontSize: 20}}>No Photos, Yet...📷</Text>
      )
    }
  
    return (
      <View>
      <Carousel
          loop
          width={350}
          height={225}
          autoPlay={false}
          data={photoURIs}
          scrollAnimationDuration={600}
          renderItem={({ item }) => (
              <View
                  style={{
                      flex: 1,
                      justifyContent: 'center',
                  }}
              >
                <Image source={{uri: item.photoURI}}
                style={styles.image}
                />
              </View>
          )
        }
      />
    </View>
    )
  }

export default photoCarousel;

const styles = StyleSheet.create({
    image: {
        width: 350, 
        height: 225, 
        marginTop: 10
    }, 
})