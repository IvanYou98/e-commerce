import {createSelector} from "reselect";

export const selectCategoriesReducer= (state) => state.categories;


export const selectCategoriesMap = createSelector(
    [selectCategoriesReducer],
    ({categories}) => categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categories) => {
        return  categories.isLoading;
    }
)