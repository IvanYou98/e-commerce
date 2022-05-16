import './shop.styles.scss'
import {CategoriesPreview} from "../categories-preview/categories-preview.component";
import {Routes, Route} from "react-router-dom";
import {Category} from "../category/category.component";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCategoriesAsync} from "../../store/categories/categories.action";

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}



