import './category-item.styles'
import {BackgroundImage, Body, DirectoryItemContainer} from "./category-item.styles";
import React from 'react';

const CategoryItem = ({category: {title, id, imageUrl}}) => (
    <DirectoryItemContainer key={id} >
        <BackgroundImage
            imageUrl = {imageUrl}/>
        <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </Body>
    </DirectoryItemContainer>
)

export default CategoryItem;
