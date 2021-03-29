import React, { useState } from 'react';
// import React from 'react';
import axios from 'axios';



function GalleryItem(props) {

    const [ showDescription, setShowDescription ] = useState( false );
    // const [ clicks, setClicks ] = useState( 0 );
    
    
    
    let displayDescripton = () =>{
        if( showDescription ){
            return( props.item.description );
        } else {
            return( <img
            className='image'
            width={120}
            height={120}
            src={props.item.path}></img> );
            }
        } // returns either image or description of image
        

        let handleClick = ( event ) =>{
            let id = props.item.id;
            console.log( 'in handleClick', id );
            // displays number of clicks on DOM
            // setClicks( props.item.likes );
            // updates server side like count 
            axios.put( `/gallery/like/` + id ).then( ( response )=>{
                console.log( 'back from PUT' );
                props.getGallery();
            }).catch( ( err )=>{
                console.log( err );
                alert( 'Ope not quite' );
            })
        
        } // end handleClick

    let toggleDescription = () =>{
        setShowDescription( !showDescription );
    }
    return (
        <div>
            <div onClick={ toggleDescription }> { displayDescripton() }</div>
            <p> Likes: {props.item.likes}  </p>
            <button className="button" onClick={ handleClick }>Like</button>
        </div>
    )
} // end GalleryItem

export default GalleryItem;

