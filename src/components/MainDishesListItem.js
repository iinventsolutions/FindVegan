import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MainDishesListItem = ({dish, restaurantid}) => {
  
  const navigation = useNavigation();

  const DishMenu = (dishId) => { 
    navigation.navigate("Main Dish", {id: dishId, resId: restaurantid})
   }

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
            source={{uri: dish.image}}
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