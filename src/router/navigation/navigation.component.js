import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {CartIcon} from "../../components/cart-icon/cart-icon.component";
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";

const Navigation = () => {
    const {toggle} = useContext(CartContext);
    const {currentUser} = useContext(UserContext);


    const signOutHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to={'/shop'}>Shop</NavLink>
                    {
                        currentUser ? <NavLink as='span' className='nav-link' onClick={signOutHandler}>SIGN OUT</NavLink>
                                    : <NavLink to='/auth'> SIGN IN </NavLink>
                    }
                    <CartIcon/>
                </NavLinks>
                {toggle && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;