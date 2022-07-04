import { useState } from 'react';
import Page from './components/Page';
import Header from './components/Header';


function App() {
  const [productTag, setProductTag] = useState("best_sellers");

  const handleTagSelection = (tagFromButton) =>{
    setProductTag(tagFromButton);

  }
  return (
    <div className="App">
      <Header handleTagSelection = {handleTagSelection} />
      <Page productTag = {productTag} />
      
   
    </div> 
  );
}

export default App;
