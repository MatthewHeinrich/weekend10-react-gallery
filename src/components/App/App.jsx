import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

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
      alert( 'Sorry Please Try Again' );
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <ul>
          {gallery.map( (item, index)=> <li key={index}> <img src={item.path} ></img> {item.description} {item.likes} </li> )}
        </ul>
      </div>
    );
}

export default App;
