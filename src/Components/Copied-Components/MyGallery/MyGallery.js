// App.js

import React from 'react';
import './MyGallery.css'; // Assuming you have a separate CSS file
import  HeadingGallery from './Heading'

const imageData = [
  {
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
  {
    url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'Eating Panda',
    caption: 'Eating Panda',
  },
 
  // Add more image objects as needed
];

const Gallery = ({ images }) => {
  return (
    <>
    <HeadingGallery/>
    <div className="gallery-wrapper">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className={`gallery__item gallery__item--${index + 1}`}>
            <a href="#" className="gallery__link">
              <img src={image.url} alt={image.alt} className="gallery__image" />
              <div className="gallery__overlay">
                <span>{image.caption}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

function MyGallery() {
    return (
      <div>
       
        <Gallery images={imageData} />
      </div>
    );
  }
  
  export default MyGallery;

