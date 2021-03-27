import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [ gallery, setGallery ] = useState([]);

  useEffect( () =>{
    getGallery();
    updateGallery();
  },[])

  

  let updateGallery = ()=>{
    // axios put call
    axios.put( `/gallery/like/:id` ).then( ( response )=>{
      console.log( 'back from PUT with:', response );
      // setClick(response.likes)
      // getGallery();
    }).catch( ( err )=>{
      console.log( err );
      alert( 'Ope not quite' );
    })
  }


  let getGallery = () => {
    axios.get( '/gallery' ).then( ( response ) =>{
      console.log('back from GET:', response.data )
      setGallery( response.data );
    }).catch( (err)=>{
      console.log(err);
      alert( 'Ope try again' );
    })
  }

  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
          <GalleryList gallery = {gallery} />
        </ul>
      </div>
    );
}

export default App;
