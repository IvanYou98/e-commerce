import './directory-item.styles'
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles";
import React from 'react';
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category: {title, id, imageUrl}}) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/shop/${title}`);

    return (
        <DirectoryItemContainer key={id} onClick = {handleClick}>
            <BackgroundImage
                imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;
