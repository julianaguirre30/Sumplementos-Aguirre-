import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";	
import {useState} from "react"
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App =()=>{

    return (
    <>
       <Header/>
     
      <ItemListContainer/>
      <ItemDetailContainer/>

       <Footer/>
        
    </>)
    
}

export default App


