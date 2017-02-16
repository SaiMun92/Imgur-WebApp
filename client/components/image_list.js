// Create our image list component
import React from 'react';
import ImageDetail from './image_detail';

// Create our component
// Jsx is the html code in the javascript code



// The .map function returns an array of ImageDetails for each of the IMAGES
const ImageList = (props) => {

  const validImages = props.images.filter(image => !image.is_album);


	const RenderedImages = validImages.map(image => {
		return <ImageDetail key = {image.title} image = {image} /> // it is passing the image attribute/property to imageDetail
	});


// Whenever we want to make references to a js variable, you encase it with a curly braces.
	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};


// Export our component
// It means that anyone who import the file iamge_list.js should receive the component ImageList by default.
export default ImageList;

//3 things to do
// import React
// Create an component
// Export the component
