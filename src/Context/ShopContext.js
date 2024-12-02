import { createContext, useState } from "react";

import all_product from '../Assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null)


const ShopContextPrivider = (props) => { 
     

    const [CartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList((prevList) => [...prevList, item]);
        
    };
 console.log(CartList)
 

    const RemoveItem=(id)=>{
      setCartList((prev)=>prev.filter((item)=>item.id!==id))
    }
    
     
    const ContextValue = { all_product,CartList,setCartList,addToCart,RemoveItem }
 

    return (
        <ShopContext.Provider  value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextPrivider



