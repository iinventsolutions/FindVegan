import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';


const ItemCounter = () => {
    
    const [itemNum, setItemNum] = useState(1);


        const addItem = () => {
          setItemNum(itemNum + 1);
          
        }
      
        const subItem = () => {
            if(itemNum >= 2){
            setItemNum(itemNum - 1);
            }
        }

  return (
    <View>
        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} className='item-counter'>
            <View style={styles.counter}><AntDesign onPress={()=>{subItem()}} name="minus" size={24} color="black" /></View>
                <Text style={{fontSize: 20}}>{itemNum}</Text>
            <View style={styles.counter}><Entypo onPress={()=>{addItem()}} name="plus" size={24} color="black" /></View>
        </View>
    </View>
  )
}

export default ItemCounter

const styles = StyleSheet.create({
    counter: {
    //   flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   borderWidth: 1,
    //   padding: 20,
      margin: 20,
      height: 50,
      width: 50,
      borderRadius: 30,
      backgroundColor: '#F8F8F8'
    },
  });