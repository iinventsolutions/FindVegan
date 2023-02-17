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
        DataStore.query(Order, o => o.usermobileID.eq(dbUser?.id)).then(res=>setOrders(res))
        
    }, [dbUser?.id])
    
    console.log("This is the order: ", orders)
    console.log("The user id is: ", dbUser?.id)
    
    const createOrder = async () => { 
        
        // console.warn('Order created');
        // console.log("The new basket is: ", basketCopy);
        // console.log("Order Log: ", dbUser.id, restaurantForOrder, parseFloat(total))
        const newOrder = await DataStore.save(new Order({
            usermobileID: dbUser?.id,
            Restaurant: restaurantForOrder,
            status: 'NEW',
            subtotal: parseFloat(total)
        }))

        await Promise.all(basket.map(BasketDish => {
            const {quantity, ...dishData } = BasketDish;
            const orderDish = new OrderDish({
                quantity: BasketDish.quantity,
                orderID: newOrder.id,
                Dish: dishData
            });

            return DataStore.save(orderDish)
        }))

        // await Promise.all(basket.map(BasketDish => {
        //     DataStore.save(new OrderDish({
        //         quantity: BasketDish.quantity,
        //         orderID: newOrder.id,
        //         Dish: BasketDish
        // }))}))

        // Spread content to the state on the orders page
        setOrders([...orders, newOrder])

        // dispatch({
        //     type: 'DELETE_ALL',
        //   })
    
        // navigation.goBack()
        // navigation.navigate("Payment Options")
     }

    //  const getOrder = async(id)=>{
    //     const order = await DataStore.query(Order, id);
    //     const OrderDishes = await DataStore.query(OrderDish, (od)=> od.orderID.eq(id))

    //     return {...order, dishes: OrderDishes}
    //  }

    async function getOrder(id) {
        const order = await DataStore.query(Order, id);
        const orderDishes = await DataStore.query(OrderDish, od => od.orderID.eq(id), {
          include: {
            dish: true // include the "Dish" model in the result set
          }
        });
      
        // Iterate over each OrderDish object and wait for its "dish" property to resolve
        const orderDishesWithDish = await Promise.all(orderDishes.map(async (od) => {
          const dish = await od.Dish;
          return { ...od, dish };
        }));
      
        return { ...order, dishes: orderDishesWithDish };
      }

     console.table("The orders aree:", restaurantForOrder);

    return(
        <OrderContext.Provider value={{createOrder, setRestaurantForOrder, orders, getOrder}}>
            {children}
        </OrderContext.Provider>
    )
 }

 export const useOrderContext = () => useContext(OrderContext)