import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import Balance from "./pages/Balance";
import  Products from "./pages/Products";
import Archive from "./pages/Archive";
import Options from "./pages/Options";
import OptionsProvider from "./context/OptionContext";

function App() {
  return (
    <>
    <BrowserRouter>
      <OptionsProvider>
        <Routes>
        <Route path="/balance" element={<Balance />}/>
        <Route path="/" element={<Products />}/>
        <Route path="/archive" element={<Archive />}/>
        <Route path="/options" element={<Options />}/>
        </Routes>
      </OptionsProvider>
    </BrowserRouter>
    </>
  )
}

export default App
