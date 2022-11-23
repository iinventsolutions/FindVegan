import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MainDishesListItem = () => {
  
  const navigation = useNavigation();

  const DishMenu = () => { 
    navigation.navigate("Main Dish")
   }

  return (
    <Pressable onPress={()=>{DishMenu()}} style={styles.container}>
        <View style={{width: '65%'}}>
            <Text style={{fontWeight: 'bold', lineHeight: 30}}>Vegan Mac & Cheese</Text>
            <Text style={{color: 'gray', lineHeight: 30}} numberOfLines={2}>Chili sauce + coleslaw+ cheese</Text>
            <View style={{height: 25, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63D17F', marginTop: 5}}><Text style={{fontWeight: 'bold', color: '#fff'}}>GHS 36.00</Text></View>
        </View>
        <View style={{width: '30%'}}>
        <Image
            source={require('../../assets/details.png')}
            style={{ width: '100%', height: '80%', borderRadius: 7}}
            />
        </View>
    </Pressable>
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