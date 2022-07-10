import { useState } from 'react';
import Page from './components/Page';
import Header from './components/Header';
import * as styles from './components/mock.styles'


function App() {
  const [productTag, setProductTag] = useState("best_sellers");

  const handleTagSelection = (tagFromButton) =>{
    setProductTag(tagFromButton);

  }
  return (
    <div className="App">
    <styles.parent>
      <styles.header_div1>
        <Header handleTagSelection = {handleTagSelection} />
      </styles.header_div1>
      <Page productTag = {productTag} />
    </styles.parent>
      
   
    </div> 
  );
}

/* .parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 6; }
.div2 { grid-area: 2 / 5 / 6 / 6; }
.div3 { grid-area: 2 / 1 / 6 / 5; } */
export default App;
