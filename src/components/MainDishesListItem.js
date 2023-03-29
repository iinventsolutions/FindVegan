import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'aws-amplify'

const MainDishesListItem = ({dish, restaurantid}) => {

  const DEFAULT_IMAGE_LINK = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/FN_chain-restaurant-entrees_Applebees_Bourbon-Street-Chicken-Shrimp_s6x4.jpg.rend.hgtvcom.616.411.suffix/1538685780055.jpeg'

  const [imageLink, setImageLink] = useState(null)
  
  const navigation = useNavigation();

  const DishMenu = (dishId) => { 
    navigation.navigate("Main Dish", {id: dishId, resId: restaurantid})
   }

  const getImage = async() => {  
  const file = await Storage.get(dish?.image, {
    level: "public"
  });
  // console.log("the image: ",file)
  setImageLink(file)
}

useEffect(() => {
  if(dish?.image){
    getImage()
  }
}, [])

  return (
    <>
    <Pressable onPress={()=>{DishMenu(dish?.id)}} style={styles.container}>
        <View style={{width: '65%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 30}}>{dish.name}</Text>
            <Text style={{color: 'gray', lineHeight: 30}} numberOfLines={1}>{dish.description}</Text>
            <View style={{height: 25, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63D17F', marginTop: 5}}><Text style={{fontWeight: 'bold', color: '#fff'}}>GHS {dish.price}</Text></View>
        </View>
        <View style={{width: '30%'}}>
        <Image
            source={{uri: imageLink ? imageLink : DEFAULT_IMAGE_LINK}}
            style={{ width: '100%', height: '80%', borderRadius: 7}}
            />
        </View>
    </Pressable>
    </>
  )
}

export default MainDishesListItem

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#E8E8E8',
      width: '100%',
      height: 110,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  });