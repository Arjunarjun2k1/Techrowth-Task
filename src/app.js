import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ListItems from "./listItems";

const App = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ListItems/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
