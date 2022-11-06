import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const NearestRestaurants = () => {
  return (
    <View style={styles.container}>
        <View >
            <View style={styles.ImgWrapper}>
                <Image source={require('../../assets/nearest.png')} style={styles.ImageContainer} />
                <View style={styles.foodRating}>
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="star" size={16} color="yellow" />
                    <AntDesign name="star" size={16} color="yellow" />
                    <Text style={{color: '#fff'}}>(134)</Text>
                </View>
            </View>
        </View>
        <View style={styles.foodDetails}>
            <Text style={{color: '#343F49', fontFamily: 'Mulish', fontWeight: '700', fontSize: 16}}>The Wholesome Table</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontFamily: 'Mulish'}}>($$$) All Organic Food</Text>
        </View>
    </View>
  )
}

export default NearestRestaurants

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
    //   backgroundColor: '#fff',
    },

    ImgWrapper: {
         display: 'flex',
         justifyContent: 'flex-end',
         width: '90%',
         height: 150, 
         marginLeft: 15,
        //  borderWidth: 3, 
         position: 'relative', 
    },

    ImageContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        // borderWidth: 1,
        resizeMode: 'cover',
        borderRadius: 20

    },

    foodRating: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute'
    },

    foodDetails: {
        padding: 15
    }
  });