import {SHOPITEMS} from "../../utils/DataPoints";
import { useState } from "react";
import {selectByTag} from "../../utils/utilFunctions.js"
import Cart from "../Cart";


const Page = ({productTag}) =>{

    let selectedItems = [];

   selectedItems = selectByTag(SHOPITEMS, productTag);


    return (

        <>
        
        {selectedItems.map((items,index) =>(<div key = {index} className= {items.name}>
            <p>{items.image}</p>
            <p>{items.price}</p>
            <p>{items.name}</p>
        </div>))}
        <Cart></Cart>
        </>
    )
    


}

export default Page;
