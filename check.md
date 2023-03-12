[{
  "id": "1",
  "name": "El Cabo Coffe Bar Tres De Mayo",
  "deliveryFee": 1.40,
  "minDeliveryTime": 25,
  "maxDeliveryTime": 35,
  "rating": 4.0,
  "address": "knust"
  "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
  "dishes": [
    {
      "name": "Cheese Tequeños",
      "description": "6 pieces of chese with sauce.",
      "price": 6.90,
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"
    },
    {
      "name": "Hamburger La Super Cabo Burger",
      "description": "Double meat, gouda cheese, cheddar cheese, cooked ham, bacon, egg, salad and rustic potatoes.",
      "price": 8.90,
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg"
    },
    {
      "name": "U.S.A. Burger",
      "description": "Beef, gouda cheese, cheddar cheese, cooked ham, bacon, egg and salad.",
      "price": 5.40
    },
    {
      "name": "Slices of Llanero Cheese",
      "description": "Ripe plantain with cheese and palm honey.",
      "price": 5.90
    },
    {
      "name": "Papas Locas El Cabo",
      "description": "French fries with shredded chicken, gouda cheese and ham.",
      "price": 7.90
    }
  ]
}]


Distance matrix API

import axios from 'axios';

const GOOGLE_DISTANCE_MATRIX_API_KEY = 'YOUR_API_KEY';

async function getDistance(origin, destination) {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: origin,
        destinations: destination,
        key: GOOGLE_DISTANCE_MATRIX_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}



const origin = 'Seattle, WA';
const destination = 'San Francisco, CA';

const distance = getDistance(origin, destination);


this is how to get distance 
*******************************
console.log(data.geometry.location.lat, data.geometry.location.lng);



How to use expo location to get current location 
*************************************************
expo install expo-location

import * as Location from 'expo-location';

<!-- Create a state variable to hold the user's location: -->
const [location, setLocation] = useState(null);


<!-- Use the useEffect hook to request permission to access the user's location when the component mounts: -->
useEffect(() => {
  getLocation();
}, []);

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  setLocation(location);
};


<!-- The getCurrentPositionAsync function returns an object with the user's location, including latitude and longitude. You can access these values by using the location.coords.latitude and location.coords.longitude properties: -->
<Text>Latitude: {location.coords.latitude}</Text>
<Text>Longitude: {location.coords.longitude}</Text>

