import './shop.styles.scss'
import {CategoriesPreview} from "../../components/categories-preview/categories-preview.component";
import {Routes, Route} from "react-router-dom";
import {Category} from "../../components/category/category.component";
import {useDispatch, useSelector} from "react-redux";
import {getCollectionsAndDocuments} from "../../utils/firebase/firebase.utils";
import {useEffect} from "react";
import {setCategoriesMap} from "../../store/categories/categories.action";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCategoriesMap = async () => {
            const categoriesMap = await getCollectionsAndDocuments();
            if (categoriesMap) {
                dispatch(setCategoriesMap(categoriesMap));
            }
        };
        fetchCategoriesMap();
    }, [dispatch]);

    const temp = useSelector(selectCategoriesMap);
    console.log(temp);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}



