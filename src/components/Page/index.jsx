import { useState } from "react";
import * as styles from "./styles"
import {SHOPITEMS} from "../../utils/DataPoints";
import {selectByTag} from "../../utils/utilFunctions.js"
import Cart from "../Cart";


const Page = ({productTag}) =>{

    let selectedItems = [];

   selectedItems = selectByTag(SHOPITEMS, productTag);


    return (

        <>

        <styles.productFlexWrapper>
            {selectedItems.map((items,index) =>(<styles.productFlexItem key = {index} className= {items.name}>
                <p><img src = {items.image} /></p>
                <p>{items.price}</p>
                <p>{items.name}</p>
            </styles.productFlexItem>))}
        </styles.productFlexWrapper>

         <styles.cart>
            <Cart></Cart>
        </styles.cart>


       
        </>
    )
    


}

export default Page;
