import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';
import { Auth } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import PaymentMethodScreen from './src/screens/PaymentMethodScreen';
import CardListScreen from './src/screens/CardListScreen';
import OrderConfirmationScreen from './src/screens/OrderConfirmationScreen';
import SearchScreen from './src/screens/SearchScreen'

Amplify.configure(awsconfig)

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <View style={styles.container}>
        <Text>Start FindVegan!</Text>
        <Text style={{color: 'red'}} onPress={()=>{Auth.signOut()}}>Logout</Text>
      </View> */}
      <RestaurantDetailsScreen />
      {/* <CartScreen /> */}
      {/* <OrderDetailsScreen /> */}
      {/* <PaymentMethodScreen /> */}
      {/* <CardListScreen /> */}
      {/* <OrderConfirmationScreen /> */}
      {/* <SearchScreen /> */}
        {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);