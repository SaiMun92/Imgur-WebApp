import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
	// props.image => this is the image object
	// props.picture => this is the picture object

	return (
		<li className="media list-group-item">
			<div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
			        {props.image.title}
                </h4>
                <p>
                    {props.image.description}
                    <ImageScore ups={props.image.ups} downs={props.image.downs} />
                </p>
            </div>
		</li>
	);
};

export default ImageDetail;