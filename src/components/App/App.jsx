import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [ gallery, setGallery ] = useState([]);

  useEffect( () =>{
    getGallery();
    
  },[])



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
        <div className="gallery">
          <GalleryList gallery = {gallery} />
        </div>
      </div>
    );
}

export default App;
