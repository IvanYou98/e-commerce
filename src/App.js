import Home from "./router/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navigation from "./router/navigation/navigation.component";
import SignIn from "./router/sign-in/sign-in.component";
import {Fragment} from "react";


const Shop = () => <Fragment>
    This is the shop page.
</Fragment>


const App = () => (
    <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
        </Route>
    </Routes>
)


export default App;
