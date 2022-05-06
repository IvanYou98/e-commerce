import Home from "./router/home/home.component";
import {Route, Routes} from "react-router-dom";
import Navigation from "./router/navigation/navigation.component";
import {Authentication} from "./router/authentication/authentication";
import {Shop} from "./router/shop/shop.component";
import {Checkout} from "./router/checkout/checkout.component";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
    }, [dispatch])
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='shop/*' element={<Shop/>}/>
                <Route path='checkout' element={<Checkout/>}/>
                <Route path='auth' element={<Authentication/>}/>
            </Route>
        </Routes>
    )

}


export default App;
