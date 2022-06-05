import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";	
import {useState} from "react"

const App =()=>{

    return (
    <>
       <Header/>
     
      <ItemListContainer greeting={"Bienvenidos a la pagina"}/>

       <Footer/>
        
    </>)
    
}

export default App


