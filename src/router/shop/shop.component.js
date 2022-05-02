import './shop.styles.scss'
import {CategoriesPreview} from "../../components/categories-preview/categories-preview.component";
import {Routes, Route} from "react-router-dom";
import {Category} from "../../components/category/category.component";

export const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}



