
import Item1 from '../../../src/swell1.jpg'
import Item2 from '../../../src/swell2.jpg'
import Item3 from '../../../src/swell3.jpg'
import Item4 from '../../../src/swell4.jpg'
import Item5 from '../../../src/swell5.jpg'
import Item6 from '../../../src/swell1.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/cart-actions'


const initState = {
    items: [
        {id:1,title:'Suede', desc: "20ML Stainless Steel Cantene", price:54,img:Item1},
        {id:2,title:'Lavendar', desc: "20ML Stainless Steel Cantene", price:23,img: Item2},
        {id:3,title:'Vans', desc: "20ML Stainless Steel Cantene",price:49,img: Item3},
        {id:4,title:'White', desc: "20ML Stainless Steel Cantene", price:36,img:Item4},
        {id:5,title:'Cropped-sho', desc: "20ML Stainless Steel Cantene", price:160,img: Item5},
        {id:6,title:'Blues', desc: "20ML Stainless Steel Cantene",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    return state
}

export default cartReducer