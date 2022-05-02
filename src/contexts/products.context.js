import {createContext, useEffect, useState} from "react";
import {getCollectionsAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {
    }
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCollectionsAndDocuments();
            setCategoriesMap(categoriesMap);
        };
        getCategoriesMap();
    }, []);
    const value = {categoriesMap, setCategoriesMap};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}