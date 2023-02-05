import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';
import { Auth } from 'aws-amplify'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import { StateProvider } from './src/components/BasketContex/StateProvider';
import reducer, { initialState } from './src/components/BasketContex/reducer'
import { AuthContextProvider } from './src/contexts/AuthContext';
// import { BasketContexProvider } from './src/contexts/BasketContex';
import { OrderContextProvider } from './src/contexts/OrderContex';
import SearchScreen from './src/screens/SearchScreen'


Amplify.configure(awsconfig)

function App() {

  // const { } = useContext(AuthContext)

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <AuthContextProvider>
        <NavigationContainer>
          <OrderContextProvider>
            
            <StatusBar style="auto" />
              <RootNavigator />
            
          </OrderContextProvider>
          </NavigationContainer>
        </AuthContextProvider>
    </StateProvider>
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
// export default App;