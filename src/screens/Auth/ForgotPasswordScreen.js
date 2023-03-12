import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form'
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  const {control, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  const onSendPressed = async(data) => {
    if(loading){
      return
    }

    setLoading(true)
    try {
      await Auth.forgotPassword(data.username);
      // console.log(data.username)
      navigation.navigate('NewPassword');
    } catch (error) {
      Alert.alert("Oops", error.message)
    }

    setLoading(false)
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name='username'
          placeholder="Enter Email Address"
          control={control}
          rules={{
            required: 'Email address is required',
            pattern: {
              value: emailRegex,
              message: 'Email is invalid'
            }
          }}
        />

        <CustomButton bgColor='#419D47' text={loading?"Loading...":"Send"} onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
