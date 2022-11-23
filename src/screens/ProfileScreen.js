import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome, FontAwesome5, Entypo, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();

  const Details = () => { 
    
   }

   const Refer = () => { 
    navigation.navigate('Refer')
  }

  const AddSocial = () => { 
    navigation.navigate('Add Social')
   }

  return (
    <View style={styles.container}>
      <Pressable onPress={Details} style={styles.foodList}>
        <View style={{width: 30, height: 25}}>
          <Ionicons name="person" size={24} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Profile Information</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Change your account information</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>

      <Pressable onPress={Details} style={styles.foodList}>
        <View style={{width: 30, height: 25}}>
          <FontAwesome name="lock" size={24} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Change Password</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Change your password</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>

      <Pressable onPress={Details} style={styles.foodList}>
        <View style={{width: 30, height: 25}}>
          <FontAwesome5 name="credit-card" size={24} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Payment Methods</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Add your credit & debit cards</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>

      <Pressable onPress={Details} style={styles.foodList}>
        <View style={{width: 30, height: 30}}>
          <Entypo name="location-pin" size={30} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Locations</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Add or remove your delivery locations</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>

      <Pressable onPress={AddSocial} style={styles.foodList}>
        <View style={{width: 30, height: 25}}>
          <EvilIcons name="sc-facebook" size={30} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Add Social Account</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Add Facebook, Twitter etc </Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>

      <Pressable onPress={Refer} style={styles.foodList}>
        <View style={{width: 30, height: 25}}>
          <FontAwesome name="share-square-o" size={24} color="black" />
        </View>
        <View style={{width: 250}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Refer to friends</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Get $10 for reffering friends</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 50
  },
  foodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    // opacity: 0.5,
    borderColor: '#F3F3F3',
    height: 100
  },
  button: {
    backgroundColor: '#419D47',
    width: 300,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  subTotal: {
    // borderWidth: 1,
    width: '90%',
    height: 180,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  subInfo: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 35
  },

  addMore: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 45,
    color: '#419D47'
  },

  arrow: {
    fontWeight: '500',
    lineHeight: 45,
  }
});