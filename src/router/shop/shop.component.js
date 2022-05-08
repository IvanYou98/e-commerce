import './shop.styles.scss'
import {CategoriesPreview} from "../../components/categories-preview/categories-preview.component";
import {Routes, Route} from "react-router-dom";
import {Category} from "../../components/category/category.component";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useEffect} from "react";
import {setCategories} from "../../store/categories/categories.action";

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocuments();
            console.log(categories);
            dispatch(setCategories(categories));
        };
        getCategories();
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}



