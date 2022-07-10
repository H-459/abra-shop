import {MENUITEMS} from "../../utils/DataPoints";
import * as styles from "./styles"


const Header = ({handleTagSelection}) => {

    return (
        <>
        <styles.flexParent>
         <styles.flex_child_first><span> logo </span></styles.flex_child_first>
     
       
        {MENUITEMS.map((item, index) => <styles.flex_child><styles.headerButton key ={index} onClick={()=> handleTagSelection(item.tag)}>{item.name}</styles.headerButton></styles.flex_child> )}
        <styles.flex_child><span> prof </span></styles.flex_child>
        </styles.flexParent>
        
        </>
    )

}

export default Header;