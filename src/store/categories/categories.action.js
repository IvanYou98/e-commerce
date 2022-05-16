import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORIES_ACTION_TYPES} from "./categories.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const setCategories = (payload) => {
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload);
}

export const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    )
}

export const fetchCategoriesFailed = (error) => {
    return createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,
        error
    )
}

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }


}
