import { useState } from 'react';
import React from 'react';

function GalleryItem(props) {

    const [ showDescription, setShowDiscription ] = useState( false );
    const [ clicks, setClicks ] = useState( 0 );
    
    let displayDescripton = () =>{
        if( showDescription ){
            return( props.item.description );
        } else {
            return( props.item.path );
            }
        }
        

        let handleClick = () =>{
            console.log( 'in handleClick' );
            setClicks( clicks +1 );
        }

    let toggleDescription = () =>{
        setShowDiscription( !showDescription );
    }
    return (
        <div>
            <li onClick={ toggleDescription }> { displayDescripton() }</li>
            <p> Likes: { clicks } </p>
            <button onClick={ handleClick }>Like</button>
        </div>
    )
}

export default GalleryItem;

{/* <img src={props.item.path} ></img> {props.item.description} {props.item.likes} */}

// {gallery.map( (item, index)=> <li key={index}> <img src={item.path} ></img> {item.description} {item.likes} </li> )}