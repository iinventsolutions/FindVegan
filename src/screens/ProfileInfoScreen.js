import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert} from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5, Entypo, EvilIcons } from '@expo/vector-icons';
import { Auth, DataStore } from 'aws-amplify'
import { UserMobile } from '../models'
import { useAuthContext } from '../contexts/AuthContext';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Avatar } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';


const ProfileInfoScreen = () => {

  const { sub, setDbUser, dbUser } = useAuthContext();

  const [fullname, setFullname] = useState(dbUser?.name || "")
  // const [address, setAddress] = useState(dbUser?.address || "")
  const [phone, setPhone] = useState(dbUser?.phone || "")
  const [lng, setLng] = useState(dbUser?.lng+"" || "0")
  const [lat, setLat] = useState(dbUser?.lat+"" || "0")
  const [googlePlaceName, setGooglePlaceName] = useState(dbUser?.address || "")



  const submitForm = async () => {
    if(dbUser){
      await updateUser();
    }
    // else{
    //   await createUser();
    // }
  }

  // const createUser = async () => { 
  //   try {
  //     const user = await DataStore.save(new UserMobile({
  //       sub: sub,
  //       address: address,
  //       lat: parseFloat(lat),
  //       lng: parseFloat(lng),
  //       name: fullname
  //     }))
  //     console.log("The user is: ",user);
  //     setDbUser(user)
  //   } catch (error) {
  //     Alert.alert("Error", error.message)
  //   }
  // }

    const updateUser = async () => { 
        const user = await DataStore.save(
          UserMobile.copyOf(dbUser, updated => {
            updated.address = googlePlaceName;
            updated.lat = parseFloat(lat);
            updated.lng = parseFloat(lng);
            updated.name = fullname;
            updated.phone = phone;
          })
        )
        setDbUser(user)
    }

    useEffect(() => {
      console.warn("dbUser: ", dbUser?.name);
    }, [])
    


  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 30}}>
        <Avatar
          size={64}
          rounded
          icon={{ name: 'heartbeat', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#F0F0F0' }}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputPlaceholder}>ADDRESS</Text>
        <Text>{googlePlaceName}</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputPlaceholder}>NAME</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFullname}
          value={fullname}
          placeholder="NAME"
          keyboardType="text"
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.inputPlaceholder}>PHONE</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="PHONE"
          keyboardType="numeric"
        />
      </View>

      <View style={{width: '100%', display: 'flex', alignItems: 'center', position: 'relative'}}>
        <View style={styles.GooglePlacesSearch}>
            <Ionicons name="location-sharp" size={18} style={{opacity: 0.5, marginTop: 13}} color="black" />
              <GooglePlacesAutocomplete
                placeholder='Enter new address'
                // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                // currentLocationLabel="Current location"
                fetchDetails={true}
                nearbyPlacesAPI= "true"
                enablePoweredByContainer={false}
                styles={{textInput: styles.Ginput}}
                getCurrentLocation
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  console.log("Map data is: ",details);
                  console.log("lat: ", details.geometry.location.lat, "lng: ",details.geometry.location.lng)
                  setLat(details?.geometry?.location?.lat)
                  setLng(details?.geometry?.location?.lng)
                  setGooglePlaceName(data.description)
                }}
                onFail={(error) => console.error("Map error is: ",error)}
                query={{
                  key: process.env.GOOGLE_API_KEY,
                  language: 'en',
                  components: 'country:gh'
                }}
                
              />
        </View>
      </View>


    <View style={{marginTop: 30, height: 90, flexDirection: 'column', justifyContent: 'space-between'}}>
      <Button 
        title='Update'
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
       // fontWeight: 'bold',
    // fontSize: 14,
    // textTransform: 'capitalize',
  },
  GooglePlacesSearch: {
    // position: 'absolute',
    justifyContent: 'center',
    // alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    // height: 55,
    // height: 'auto',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 5,
    borderRadius: 5,
  },

  Ginput: {

  },
  
  inputView: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    height: 50,
    width: '100%',
    // borderBottomWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    // borderBottomColor: '#E6E6E6',
    marginBottom: 20
  },

  inputPlaceholder: {
    fontSize: 9,
    color: '#909090'
  }

});