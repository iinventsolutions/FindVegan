import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = 'https://media-cdn.tripadvisor.com/media/photo-s/10/00/b6/f6/pizza-good-wine.jpg'

const TopRestaurants = ({restaurant}) => {

    const navigation = useNavigation();

    const goToRestaurantDetails = () => { 
        navigation.navigate("RestaurantDetails", {id: restaurant.id})
     }

  return (
    <Pressable onPress={goToRestaurantDetails} style={styles.container}>
        
        <View style={styles.ImgWrapper}>
            <Image source={{uri: restaurant.image.startsWith('http')? restaurant?.image : DEFAULT_IMAGE}} style={styles.ImageContainer} />
            <View style={styles.foodRating}>
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Text style={{color: '#fff'}}>({restaurant?.rating.toFixed(1)})</Text>
            </View>
        </View>
        <View style={styles.foodDetails}>
            <Text style={{color: '#343F49', fontWeight: '700', fontSize: 16}}>{restaurant?.name}</Text>
            <Text style={{color: '343F49', opacity: 0.5}} numberOfLines={1}>($$) Thai Cuisine</Text>
        </View>
    </Pressable>
  )
}

export default TopRestaurants

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginRight: 5
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
        width: 200,
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