import React, {useState, createContext, useContext, useEffect} from "react";
import { BasketDish, Order, OrderDish } from "../models";
import { useStateValue } from "../components/BasketContex/StateProvider";
import { getBasketTotal } from "../components/BasketContex/reducer";
import { useAuthContext } from "./AuthContext";
import { DataStore } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

export const OrderContext = createContext()

export const OrderContextProvider = ({children}) => { 

    const navigation = useNavigation();

    const [{basket}, dispatch] = useStateValue()
    const { dbUser } = useAuthContext();
    const [orders, setOrders] = useState()
    const [restaurantForOrder, setRestaurantForOrder] = useState()

    const deliveryFee = restaurantForOrder?.deliveryFee
    const total = ((getBasketTotal(basket)+deliveryFee).toFixed(2))
    
    useEffect(() => {
        DataStore.query(Order, o => o.userID('eq', dbUser.id)).then(res=>setOrders(res))
        
    }, [dbUser])
    
    console.log("This is the order: ", orders)
    const createOrder = async () => { 
        
        // console.warn('Order created');
        // console.log("The new basket is: ", basketCopy);
        const newOrder = await DataStore.save(new Order({
            userID: dbUser.id,
            Restaurant: restaurantForOrder,
            status: 'NEW',
            subtotal: parseFloat(total)
        }));

        let dishQuantity;
        await Promise.all(basket.map(BasketDish => {
            // dishQuantity = BasketDish.quantity
            // delete BasketDish.quantity
            DataStore.save(new OrderDish({
                quantity: BasketDish.quantity,
                orderID: newOrder.id,
                Dish: BasketDish
        }))}))

        // Spread content to the state on the orders page
        setOrders([...orders, newOrder])

        // dispatch({
        //     type: 'DELETE_ALL',
        //   })
    
        // navigation.goBack()
        navigation.navigate("Payment Options")
     }

     const getOrder = async(id)=>{
        const order = await DataStore.query(Order, id);
        const OrderDishes = await DataStore.query(OrderDish, (od)=> od.orderID('eq', id))

        return {...order, dishes: OrderDishes}
     }

     console.table("The orders aree:", restaurantForOrder);

    return(
        <OrderContext.Provider value={{createOrder, setRestaurantForOrder, orders, getOrder}}>
            {children}
        </OrderContext.Provider>
    )
 }

 export const useOrderContext = () => useContext(OrderContext)