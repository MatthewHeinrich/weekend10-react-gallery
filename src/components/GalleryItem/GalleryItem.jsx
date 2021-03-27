import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function GalleryItem(props) {

    const [ showDescription, setShowDescription ] = useState( false );
    const [ clicks, setClicks ] = useState( 0 );
    
    
    let displayDescripton = () =>{
        if( showDescription ){
            return( props.item.description );
        } else {
            return( <img
            width={300}
            height={300}
            src={props.item.path}></img> );
            }
        }
        

        let handleClick = () =>{
            console.log( 'in handleClick');
            setClicks( clicks +1 );
            // setShowDescription( [ ...showDescription, newLikes ] );
            // setTempName( event.target.value );

            // const newLikes = {
            //     likes: tempLikes
            // }
            axios.put( `/gallery/like/:id` ).then( ( response )=>{
                console.log( 'back from PUT with:', response.data );
                // setClick(response.likes)
                // getGallery();
            }).catch( ( err )=>{
                console.log( err );
                alert( 'Ope not quite' );
            })
        }

    let toggleDescription = () =>{
        setShowDescription( !showDescription );
    }
    return (
        <div>
            <div  onClick={ toggleDescription }> { displayDescripton() }</div>
            <p> Likes: { clicks } </p>
            <button onClick={ handleClick }>Like</button>
        </div>
    )
}

export default GalleryItem;

{/* <img src={props.item.path} ></img> {props.item.description} {props.item.likes} */}

// {gallery.map( (item, index)=> <li key={index}> <img src={item.path} ></img> {item.description} {item.likes} </li> )}