import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form'
import {DataStore, Auth } from 'aws-amplify';
import { UserMobile } from '../../models';
import { useAuthContext } from '../../contexts/AuthContext';


const SignUpScreen = () => {

  const { setDbUser } = useAuthContext();
  const [loading, setLoading] = useState(false)

  const {control, handleSubmit, watch} = useForm()
  const pawsd = watch('password')
  const navigation = useNavigation();

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const onRegisterPressed = async(data) => {
    if(loading){
      return
    }

    setLoading(true)
    // navigation.navigate('ConfirmEmail', {userEmail: data.email});
    const {name, username, email, password, phone} = data
    try {
      const registeringUser = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          phone_number: phone,
          name,
          preferred_username: username,
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      })

      // await Auth.updateUserAttributes(registeringUser, {
      //   'custom:groups': 'MobileUsersPool'
      // });

      const {userSub} = registeringUser
      const user = await DataStore.save(new UserMobile({
        sub: userSub,
        phone: phone,
        name: name
      }))
      setDbUser(user)
      navigation.navigate('ConfirmEmail', {username: data.email});
      // console.log(res)
    } catch (error) {
      Alert.alert("Oops", error.message)
    }

    setLoading(false)
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');

  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.mainHead}>Welcome</Text>
          <Text style={styles.subHead}>Enter your Name, Email and Password for sign up.</Text>
        </View>

        <CustomInput 
          name='name'
          placeholder="Full Name" 
          control={control}
          rules={{
            required: 'Name is required',
          }}
          />

        <CustomInput 
          name='username'
          placeholder="Username" 
          control={control}
          rules={{
            required: 'Username is required',
          }}
          />

        <CustomInput 
          name='email'
          placeholder="Email Address" 
          control={control}
          rules={{
            required: 'Email address is required',
            pattern: {
              value: emailRegex,
              message: 'Email is invalid'
            }
          }}
          />

        <CustomInput
          name='phone'
          placeholder="Phone number"
          control={control}
          rules ={{required: 'Phone number is required'}}

        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password address is required',
            minLength: {
              value: 8,
              message: 'Password should be more than 8 characters'
            }
          }}
        />

        <CustomInput
          name='repeat-password'
          placeholder="Repeat Password"
          control={control}
          secureTextEntry
          rules={{
            validate: value => value === pawsd || 'Password do not match'
          }}
        />

        <CustomButton bgColor='#419D47' text={loading?"Registering user...":"Register"} onPress={handleSubmit(onRegisterPressed)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
    padding: 5
  },
  link: {
    color: '#FDB075',
  },
  
  mainHead: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10
  },
  
  subHead: {
    lineHeight: 25,
    color: '#868686'
  }
});

export default SignUpScreen;
