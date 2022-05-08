import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

import {signOutUser} from "../../utils/firebase/firebase.utils";
import {CartIcon} from "../../components/cart-icon/cart-icon.component";
import {CartDropdown} from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";
import {selectCurrentUser} from "../../store/user/user.selector";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {isCartOpen} = useContext(CartContext);
    // const {currentUser} = selectCurrentUser();
    const currentUser = useSelector(selectCurrentUser);


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
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;