import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const TopCategories = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.ImgWrapper}>
            <Image source={require('../../assets/doha.png')} style={styles.ImageContainer} />
            <View style={styles.foodRating}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Vegan Fast Food</Text>
            </View>
        </View>
        {/* <View style={styles.foodDetails}>
            <Text style={{color: '#343F49', fontFamily: 'Mulish', fontWeight: '700', fontSize: 16}}>Mayfield Bakery & Cafe</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontFamily: 'Mulish'}}>($$$) Thai Cuisine</Text>
        </View> */}
    </View>
  )
}

export default TopCategories

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 20
    //   backgroundColor: '#fff',
    },

    ImgWrapper: {
         display: 'flex',
         justifyContent: 'flex-end',
         width: 160,
         height: 160, 
        //  marginLeft: 15,
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
        borderRadius: 15

    },

    foodRating: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        // borderWidth: 1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: '#000',
        opacity: .6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    foodDetails: {
        padding: 15
    }
  });