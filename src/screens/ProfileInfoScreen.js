import React, { useState } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert} from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5, Entypo, EvilIcons } from '@expo/vector-icons';
import { Auth, DataStore } from 'aws-amplify'
import { UserMobile } from '../models'
import { useAuthContext } from '../contexts/AuthContext';

const ProfileInfoScreen = () => {

  const { sub, setDbUser, dbUser } = useAuthContext();

  const [fullname, setFullname] = useState(dbUser?.name || "")
  const [address, setAddress] = useState(dbUser?.address || "")
  const [lng, setLng] = useState(dbUser?.lng+"" || "0")
  const [lat, setLat] = useState(dbUser?.lat+"" || "0")



  const submitForm = async () => {
    if(dbUser){
      await updateUser();
    }else{
      await createUser();
    }
    
   }

   const createUser = async () => { 
    try {
      const user = await DataStore.save(new UserMobile({
        sub: sub,
        address: address,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        name: fullname
      }))
      console.log("The user is: ",user);
      setDbUser(user)
    } catch (error) {
      Alert.alert("Error", error.message)
    }
  }

    const updateUser = async () => { 
        const user = await DataStore.save(
          UserMobile.copyOf(dbUser, updated => {
            updated.address = address;
            updated.lat = parseFloat(lat);
            updated.lng = parseFloat(lng);
            updated.name = fullname;
          })
        )
        setDbUser(user)
     }


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFullname}
        value={fullname}
        placeholder="FULL NAME"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="ADDRESS"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLng}
        value={lng}
        placeholder="LONGITUDE"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLat}
        value={lat}
        placeholder="LATITUDE"
        keyboardType="numeric"
      />

    <View style={{height: 90, flexDirection: 'column', justifyContent: 'space-between'}}>
      <Button 
        title='Submit'
        onPress={submitForm}
        />

      <Button 
        title='Sign Out'
        color='red'
        onPress={()=>{Auth.signOut()}}
        />
      </View>
    </SafeAreaView>
  )
}

export default ProfileInfoScreen

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },

  input: {
    height: 40,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    marginBottom: 35
  }

});