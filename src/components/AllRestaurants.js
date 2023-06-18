import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'aws-amplify'

const DEFAULT_IMAGE = 'https://media-cdn.tripadvisor.com/media/photo-s/10/00/b6/f6/pizza-good-wine.jpg'

const AllRestaurants = ({restaurant}) => {

    const navigation = useNavigation();
    const [imageLink, setImageLink] = useState(null)

    const goToRestaurantDetails = () => { 
        navigation.navigate("RestaurantDetails", {id: restaurant.id, imageLink: imageLink})
     }

     const getImage = async() => {  
        const file = await Storage.get(`RestaurantImages/${restaurant?.image}`, {
          level: "public"
        });
        // console.log("the image: ",file)
        setImageLink(file)
      }
  
      useEffect(() => {
        if(restaurant?.image){
          getImage()
        }
      }, [])

  return (
    <Pressable onPress={goToRestaurantDetails} style={styles.container}>
        <View >
            <View style={styles.ImgWrapper}>
                <Image source={{uri: restaurant?.image ? imageLink : DEFAULT_IMAGE}} style={styles.ImageContainer} />
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
            <Text style={{color: '#343F49', fontWeight: '700', fontSize: 16}}>{restaurant.name}</Text>
            <Text style={{color: '343F49', opacity: 0.5}}>($$$) All Organic Food</Text>
        </View>
    </Pressable>
  )
}

export default AllRestaurants

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    //   alignItems: 'center',
    //   borderWidth: 2
    //   backgroundColor: '#fff',
    },

    ImgWrapper: {
         display: 'flex',
         justifyContent: 'flex-end',
         width: '100%',
         height: 200, 
         padding: 10,
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