import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";	
import ItemDetailContainer from "./components/ItemDetailContainer";
import Main from "./components/Main";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartContextProvider } from "./components/CartContext";



const App =()=>{

    return (
    <>

        <BrowserRouter>
            <CartContextProvider>

          
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>                                          
                    <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
                    <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                    <Route path="/All" element={<ItemListContainer />}/>  
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
     
                    <Route/>
                </Routes>
            </CartContextProvider>
            <Footer/>
         </BrowserRouter>
        
    </>)
    
}

export default App


