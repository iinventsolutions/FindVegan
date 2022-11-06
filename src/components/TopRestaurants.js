import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const TopRestaurants = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.ImgWrapper}>
            <Image source={require('../../assets/doha.png')} style={styles.ImageContainer} />
            <View style={styles.foodRating}>
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Text style={{color: '#fff'}}>(134)</Text>
            </View>
        </View>
        <View style={styles.foodDetails}>
            <Text style={{color: '#343F49', fontFamily: 'Mulish', fontWeight: '700', fontSize: 16}}>Mayfield Bakery & Cafe</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontFamily: 'Mulish'}}>($$$) Thai Cuisine</Text>
        </View>
    </View>
  )
}

export default TopRestaurants

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginRight: 15
    //   backgroundColor: '#fff',
    },

    ImgWrapper: {
         display: 'flex',
         justifyContent: 'flex-end',
         width: '100%',
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