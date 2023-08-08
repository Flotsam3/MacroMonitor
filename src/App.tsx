import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import Balance from "./pages/Balance";
import  Products from "./pages/Products";
import Archive from "./pages/Archive";

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Balance />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/archive" element={<Archive />}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
