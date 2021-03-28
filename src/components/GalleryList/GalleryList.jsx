import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    
    return (
        <>
            <ul>
                
                { props.gallery.map( ( item, index ) => <GalleryItem item={item} key={index}/> ) }
            </ul>
        </>
    ) // returns item list 
} // end GalleryList 

export default GalleryList;
