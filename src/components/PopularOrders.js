import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PopularOrders = () => {
    const navigation = useNavigation();

  return (
    <Pressable onPress={()=>{navigation.navigate("Main Dish")}} style={styles.container}>
        
        <View style={styles.ImgWrapper}>
            <Image source={require('../../assets/small.png')} style={styles.ImageContainer} />
            <View style={styles.foodRating}>
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Ionicons name="star-sharp" size={18} color="yellow" />
                <Text style={{color: '#fff'}}>(134)</Text>
            </View>
        </View>
        <View style={styles.foodDetails}>
            <Text style={{color: '#343F49', fontWeight: '700', fontSize: 16}}>Mayfield Bakery & Cafe</Text>
            <Text style={{color: '343F49', opacity: 0.5}}>($$$) Thai Cuisine</Text>
        </View>
    </Pressable>
  )
}

export default PopularOrders

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginRight: 15,
    //   width: 170,
    //   borderWidth: 2
    //   backgroundColor: '#fff',
    },

    ImgWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        height: 120, 
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
        margin: 15,
        justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1
        
    }
  });