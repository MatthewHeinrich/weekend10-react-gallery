import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    
    return (
        <>
            <div className="galleryList">
                
                { props.gallery.map( ( item, index ) => <GalleryItem item={item} key={index}/> ) }
            </div>
        </>
    ) // returns item list 
} // end GalleryList 

export default GalleryList;
