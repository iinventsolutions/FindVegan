import { createContext, useState, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";

export const BasketContex = createContext()

export const BasketContexProvider = ({children}) => { 

    const {dbUser} = useAuthContext()
    const [basketrestaurant, setBasketRestaurant] = useState(null)
    const [basket, setBasket] = useState(null)


    
    useEffect(() => {
        DataStore.query(Basket, (b)=> b.restaurantID.eq(basketrestaurant?.id).usermobileID.eq(dbUser?.id)).then((baskets)=>setBasket(baskets[0]));
        // DataStore.query(Basket, (b)=> b.and(b => [b.restaurantID('eq', basketrestaurant?.id), b.usermobileID('eq', dbUser)])).then((baskets)=>setBasket(baskets[0]));
        console.log("The restaurant basket is: ",basket)

        // console.log("The restaurant basket is: ",basketrestaurant);
    }, [basketrestaurant, dbUser])
    

    const addDishToBasket = async (dish, quantity) => { 
        // console.log("The dish and quantity is: ", dish, quantity);
        // let theBasket = basket || await createNewBasket();
        // let theBasket = basket.id? basket : await createNewBasket();
        // console.log("Basket content: ", basket);
        let theBasket;
        if(!basket){
            theBasket = await createNewBasket();
        }else{
            theBasket = basket;
            console.log("Basket content: ", theBasket)
        }
     }

    const createNewBasket = async () => {
        const newBasket = await DataStore.save(new Basket({
            usermobileID: dbUser.id,
            restaurantID: basketrestaurant.id
        })).then((res)=>setBasket(res))
        setBasket(newBasket)
        return newBasket
    }

    return(
        <BasketContex.Provider value={{addDishToBasket, setBasketRestaurant}}>
            {children}
        </BasketContex.Provider>
    )
}

export const useBasketContext = () => useContext(BasketContex)