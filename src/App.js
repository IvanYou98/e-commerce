import Home from "./router/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./router/navigation/navigation.component";
import {Authentication} from "./router/authentication/authentication";
import {Fragment} from "react";


const Shop = () => <Fragment>
    This is the shop page.
</Fragment>


const App = () => (
    <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='auth' element={<Authentication/>}/>
        </Route>
    </Routes>
)


export default App;
