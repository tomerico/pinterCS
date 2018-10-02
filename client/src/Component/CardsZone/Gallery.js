import * as React from 'react';
import Masonry from 'react-masonry-component';
import Card from './Card/Card';
import './Gallery.css';

const masonryOptions = {
    transitionDuration: 0,
    isFitWidth: true

    // columnWidth: 200,
    // itemSelector: '.grid-item'
    
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    
    render() {
        const childElements = this.props.elements.map(function(element){ //element run over all the cells in the new array
            console.log('1111111', element.id);
            return (

                <Card key={element._id} imageFromMasonry={element.img}/> // access the key image in every cell and transfer it as a props 'imageFromMasonry' to Card
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;