import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";	
import ItemDetailContainer from "./components/ItemDetailContainer";
import Main from "./components/Main";
import {BrowserRouter,Routes, Route} from "react-router-dom";

const App =()=>{

    return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                
            </Routes>
            <Footer/>
         </BrowserRouter>
        
    </>)
    
}

export default App


