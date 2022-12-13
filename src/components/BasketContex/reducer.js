export const initialState = {
    basket: []
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => (item.price*item.quantity) + amount, 0);

const reducer = (state, action)=>{
    console.log(action)

    switch (action.type) {
        case 'ADD_TO_BASKET':
            // ADD TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // REMOVE
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0){
                newBasket.splice(index, 1);
            }
            return {
                ...state, 
                basket: newBasket
            }
            break;
        case 'DELETE_ALL':
            // CLEAR ALL
            return{
                basket: []
            }
            break;
    
        default:
            return state;
    }
}

export default reducer;