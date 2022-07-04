import {MENUITEMS} from "../../utils/DataPoints";

const Header = ({handleTagSelection}) => {

    return (
        <>
        {MENUITEMS.map((item, index) => <button key ={index} onClick={()=> handleTagSelection(item.tag)}>{item.name}</button> )}
        
        </>
    )

}

export default Header;