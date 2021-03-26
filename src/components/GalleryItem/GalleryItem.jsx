import { useState } from 'react';
import React from 'react';

function GalleryItem(props) {
    return (
        <div>
            <img src={props.item.path} ></img> {props.item.description} {props.item.likes}
        </div>
    )
}

export default GalleryItem;


// {gallery.map( (item, index)=> <li key={index}> <img src={item.path} ></img> {item.description} {item.likes} </li> )}