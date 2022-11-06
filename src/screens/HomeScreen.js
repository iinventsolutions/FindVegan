import {View, Text, StyleSheet, ScrollView} from 'react-native'
import NearestRestaurants from '../components/NearestRestaurants';
import TopRestaurants from '../components/TopRestaurants';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Top Restaurants</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopRestaurantsView}>
            <TopRestaurants />
            <TopRestaurants />
            <TopRestaurants />
        </ScrollView>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Nearest Restaurants</Text>
        </View>
        <NearestRestaurants />
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#fff',
      marginTop: 40
    },

    TopRestaurantsView:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 2
    }
  });
