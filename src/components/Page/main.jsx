import {SHOPITEMS} from "../../config/Config";

const Page = () =>{
    console.log(SHOPITEMS)


    return (

        <>
        {SHOPITEMS.map(items =>(<div className= {items.name}>
            <p>{items.image}</p>
            <p>{items.price}</p>
            <p>{items.name}</p>
        </div>))}
        </>
    )
    


}

export default Page;
